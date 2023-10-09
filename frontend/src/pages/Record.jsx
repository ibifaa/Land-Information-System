/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { SuccesPage } from '../component/SuccesPage';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Record = () => {
    const navigate = useNavigate();
    const [propertyId, setPropertyId] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [lga, setLga] = useState('');
    const [date, setDate] = useState('');

    const formSubmitted = () => {
        navigate("/SuccessPage");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: name,
            address: address,
            description: description,
            location: location,
            lga: lga,
            date: date
        }

        axios.post('http://localhost:8081/login', data)
            .then(res => console.log(res))
            .catch(err => console.log(err));

    }
    return (
        <div className='record bg-color'>
            <form onSubmit={handleSubmit}>
                <p>Fill in land details</p>
                <div>
                    <label htmlFor="propertyID mg">Property ID</label> <br />
                    <input className='propInput' type="text" placeholder='propertyID' onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="name">Name</label> <br />
                    <input className='propInput' type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="address">Address</label><br />
                    <input className='propInput' type="text" placeholder='name' onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="description">Description</label> <br />
                    <textarea className='propInput' name="description" id="" cols="22" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <label htmlFor="location">Location</label><br />
                    <input className='propInput' type="text" placeholder='location' onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="lga">LGA</label><br />
                    <input className='propInput' type="text" placeholder='LGA' onChange={(e) => setLga(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="date">Date</label><br />
                    <input className='propInput' type="date" onChange={(e) => setDate(e.target.value)} />
                </div>
                <button className='loginBtn center' type='submit' onClick={formSubmitted}>Submit</button>

            </form>
        </div>
    )
}


