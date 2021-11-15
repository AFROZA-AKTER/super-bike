import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut , createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile , sendEmailVerification } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const [isLoading , setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
      
    }

    const createUserWithPassword = ( email , password) =>{
        setIsLoading(true)
      return createUserWithEmailAndPassword(auth ,  email , password)
    }

    const signInUsingPassword = (email , password) => {
        setIsLoading(true)
      return signInWithEmailAndPassword(auth , email , password )
    }

    const logOut = () => {
      setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    // observe user auth state change.
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });

        return () => unsubscribed;
    }, [])

    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        createUserWithPassword,
        signInUsingPassword,
        setUser,
        setError,
        setIsLoading,
        logOut
    }
}

export default useFirebase;