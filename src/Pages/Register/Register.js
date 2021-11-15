import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const location = useLocation();
  const history = useHistory();

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const {
    setError,
        setUser,signInUsingGoogle,setIsLoading,createUserWithPassword
  } = useAuth();

  const handleGetName = e =>{
      setName(e.target.value)
  }
  const handleGetEmail = e =>{
      setEmail(e.target.value)
  }
  const handleGetPassword = e =>{
      setPassword(e.target.value)
  }

  const redirect_uri = location.state?.from || "/home";
  console.log(redirect_uri);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    signInUsingGoogle()
        .then(result => {
            setUser(result.user)
            history.push(redirect_uri)
        })
        .catch((error) => {
            setError(error);
          })
          .finally(() => {
            setIsLoading(false);
        })
          
    } 

    const handleCreateUserWithPassword = (e) => {
        setIsLoading(true);
        createUserWithPassword( email , password)
        .then(result => {
            setUser(result.user)
            history.push(redirect_uri)
        })
        .catch((error) => {
            setError(error);
          })
          .finally(() => {
            setIsLoading(false);
        })
          e.preventDefault()
    }
  

    return (
        <div id="signup" className="form w-50 m-5">
                <form onSubmit={ handleCreateUserWithPassword}>
                  <input
                    type="text"
                    name="fullname"
                    className="input_field"
                    placeholder="Full Name"
                    onBlur={handleGetName}
                  />
                  <input
                    type="text"
                    name="email"
                    className="input_field"
                    placeholder="Email *"
                    onBlur={handleGetEmail}
                  />
                  <input
                    type="password"
                    name="password"
                    className="input_field"
                    placeholder="Password *"
                    onBlur={handleGetPassword}
                  />
                  <div className="m-2 fst-italic fs-6" >
                    <Link to="/login" style={{color:"#071C55"}}>Already Registered?</Link>
                  </div>
                  <input 
                    className="input_btn btn-custom"
                    type="submit"
                    value="Sign Up"
                  />
                  <button onClick={handleGoogleLogin} className="googleBtn">Google sign in</button>
                </form>
                
              </div>
    );
};

export default Register;