/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate("/login");
    }

    return (
        <div className='home'>
            <div className='home-content'>
                <h1 className='heading'>Online search services providing you with land title & property information</h1>
                <button className='home-btn' onClick={login} >Login</button>
            </div>
        </div>
    )
}


