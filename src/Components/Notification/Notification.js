import React, { useEffect, useState } from 'react';
import Notifications from './Notifications';

const Notification = () => {
    const [complain,setComplain]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/complain')
        .then(res=>res.json())
        .then(data=>{
            setComplain(data);
        })
    })
    return (
        <div className='container'>
            <h2 className='text-center'>All Complains</h2>
            <div className='row bg-dark vh-100'>
                {
                    complain.map((data)=>{
                        return <Notifications  key={data._id} data={data}/>
                    })
                }
            </div>
            
        </div>
    );
};

export default Notification;