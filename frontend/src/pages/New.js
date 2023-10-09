/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';


function New() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8081/user')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));

    }, [])
    return (
        <div style={{ padding: "50px" }}>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Password</th>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.username}</td>
                            <td>{d.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    )
}

export default New
