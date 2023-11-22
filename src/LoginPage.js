import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        // Logic for authentication goes here
        // If successful:
        setIsAuthenticated(true);
        navigate('/landing');
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
    );
}

export default LoginPage;