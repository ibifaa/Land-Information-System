/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Services = () => {
    const navigate = useNavigate();

    const updateRecord = () => {
        navigate("/record");
    }
    return (
        <div className='services bg-color'>
            <div className='service-content'>
                <div className='service-content'>
                    <h1>FIND PROPERTY</h1>
                    <p>Use property Id, to confirm the property exist</p>
                    <p>Know where it is and confirm basic property details</p>
                </div>
                <div className='service-btn'>
                    <button className='search-btn' onClick={updateRecord}>Update Property</button>
                    <button className='search-btn'>Search Property</button>
                </div>
            </div>
        </div>
    )
}

