import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginAccount = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:8080/login?email=${email}&password=${password}`)
             .then((response) => {
                alert(response.data);
             });
    }

    return (
        <div className="login">
            {/* logo */}
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            {/* login section */}
            <div class="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} type="text" onChange={event => setEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input value={password} type="password" onChange={event => setPassword(event.target.value)} />
                    <button type="submit" className="login_signInButton" onClick={loginAccount}>Sign In</button>
                </form>
                <p>Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <Link to="/register"><button className="login_registerButton">Create your Account</button></Link>
            </div>
        </div>
    );
}

export default Login;