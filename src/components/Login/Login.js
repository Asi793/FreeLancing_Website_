import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

export default function Login({ setIsLoggedIn }) {
    const navigate = useNavigate(); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if(username === 'asritha' && password === '123') {
            navigate('/services'); 
        } else {
            setErrorMessage("Invalid Credentials !!!");
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <input type="text" name="username" id="username" placeholder="Enter Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name="password" id="password" placeholder="Enter Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <input type="submit" value="Login" />
                {errorMessage && <p>{errorMessage}</p>}
                <Link to="/forgot-password">Forgot Password</Link>
            </form>
        </div>
    );
}


