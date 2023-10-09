/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Services } from '../pages/Services';
import { Report } from '../pages/Report';

export const Navbar = () => {
    return (

        <div className='nav'>
            <div className='brand'>
                <h1>Obio/Akpor </h1>
                <p>Land Information System</p>
            </div>
            <div>
                <Link className='link m-4' to='/'>Home</Link>
                <Link className='link m-4' to='/login'>Staff login</Link>
                <Link className='link m-4' to='/services'>Services</Link>
            </div>
        </div>

    )
}


