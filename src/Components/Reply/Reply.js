import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

const Reply = () => {
    const [com,setCom]=useState({})
    const {users}=useFirebase()
    const [reply,setReply]=useState('')
    const {id}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/complain/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setCom(data)
        })
    },[id])

    const  handleChange=(e)=>{
        setReply(e.target.value)
    }
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch('http://localhost:5000/reply',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({reply, email:com.email })

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            
        })
        alert("Complain replied successfully")
    }
    return (
        <div className='row'>
            <div className='col-md-4 m-auto'>
                <div className='card'>
                    <div className='card-body'>
                        <p>{com.complain}</p>
                        <p>{com.email}</p>
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <form onSubmit={handleSubmit}>
                <textarea rows="5" name="repli" onChange={handleChange}></textarea>
                <br/>
                <button type='submit' className='btn btn-danger'>Submit</button>
                </form>
                
            </div>
        
        </div>
    );
};

export default Reply;