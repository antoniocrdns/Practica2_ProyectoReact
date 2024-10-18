import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Por favor, rellena todos los campos.');
        } else {
            setError('');
            console.log('Login exitoso:', { email, password });
        }
    };

    return (
        <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
                type="email" 
                className="form-control" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
                type="password" 
                className="form-control" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        </div>
    );
}

export default Login;
