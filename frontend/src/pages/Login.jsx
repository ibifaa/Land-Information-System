/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/login', { username, password })
            .then(res => { console.log(res) })
            .catch(err => console.log(err));
        navigate("/services");
    }

    return (
        <div className='login-form'>
            <div className='form-content'>
                <form onSubmit={handleSubmit}>
                    <h1 className='login-heading'>Login</h1>
                    <div className='mar'>
                        <label htmlFor="username"  >Username</label> <br />
                        <input className='formInput' type="text" placeholder='enter username' onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="username" className='mar'>Password</label><br />
                        <input className='formInput' type="password" placeholder='enter password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='loginBtn' type='submit'>Login</button>
                </form>
            </div >
        </div >
    )
}


