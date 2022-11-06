import React, { useEffect, useState } from 'react';
import Notice from './Notice';

const Notices = () => {
    const [noticeData,setNoticeData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/notice')
        .then(res=>res.json())
        .then(data=>{
            setNoticeData(data)
        })
    },[])
    return (
        <div className='container'>
            <div className='row'>
            {
                noticeData.map((data)=>{
                    return <Notice key={data._id} data={data}/>
                })
            }
            </div>
            
        </div>
    );
};

export default Notices;