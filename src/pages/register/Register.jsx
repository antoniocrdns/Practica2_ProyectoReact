import React, { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !role || !password) {
            setError('Por favor, rellena todos los campos.');
        } else {
            setError('');
            console.log('Registro exitoso:', { name, email, role, password });
        }
    };

    return (
        <div className="container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label className="form-label">Name</label>
            <input 
                type="text" 
                className="form-control" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            </div>
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
            <label className="form-label">Role</label>
            <input 
                type="text" 
                className="form-control" 
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
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
            <button type="submit" className="btn btn-secondary">Register</button>
        </form>
        </div>
    );
}

export default Register;
