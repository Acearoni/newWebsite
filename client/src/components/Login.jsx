import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/login', { username, password })
            .then((res) => {
                console.log('Login Successful:', res.data);
                localStorage.setItem('token', res.data.token);
                window.location.href = '/';
            })
            .catch((err) => {
                console.log(err);
                setError('Invalid credentials. Please try again.');
            });
    };

    return (
        <div className="login-container">
            <h1>Admin Login</h1>
            <form onSubmit={submitHandler} className="login-form">
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                {error && <p className="error-text">{error}</p>}

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
