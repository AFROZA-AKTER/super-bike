
import { useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { setError,
        setUser, signInUsingGoogle, setIsLoading, signInUsingPassword } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGetEmail = e => {
        setEmail(e.target.value)
    }
    const handleGetPassword = e => {
        setPassword(e.target.value)
    }

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

    const handleSignInWithPassword = (e) => {
        setIsLoading(true);
        signInUsingPassword(email, password)
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
            <form onSubmit={handleSignInWithPassword}>
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
                <div className="forgot m-3 fst-italic fs-6">
                    <Link to="/forgot-password" style={{ color: "#071C55" }}>Forgot Password?</Link>
                </div>
                <input
                    className="input_btn btn-custom"
                    type="submit"
                    value="LOG IN"
                />
                <button onClick={handleGoogleLogin} className="googleBtn">Google sign in</button>
            </form>

        </div>
    );
};

export default Login;