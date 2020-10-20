import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Register.css';

function Register(){
    const [userName, setUserName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createAccount = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:8080/register?userName=${userName}&mobileNo=${mobileNo}&email=${email}"&password=${password}`
        ).then(response =>{
            if(response.data == "registered"){
                alert("Registered successfully");
                window.location.reload();
            } else{
                alert("Registration failed. Please try again after sometime")
            }
        });
    }

    return (
        <div className="register">
            {/* logo */}
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            {/* login section */}
            <div class="register_container">
                <h1>Create Account</h1>
                <form>
                    <h5>Your name</h5>
                    <input value={userName} type="text" onChange={event => setUserName(event.target.value)} />

                    <h5>Mobile number</h5>
                    <input value={mobileNo} type="text" onChange={event => setMobileNo(event.target.value)} />

                    <h5>Email(optional)</h5>
                    <input value={email} type="text" onChange={event => setEmail(event.target.value)} />

                    <h5>Password</h5>
                    <input value={password} type="password" onChange={event => setPassword(event.target.value)} />
                    <button type="submit" className="register_button" onClick={createAccount}>Sign Up</button>
                </form>
                <p>Already have an account?</p>
                <Link to="/login">Sign in</Link>
            </div>
        </div>
    );
}

export default Register;