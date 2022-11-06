import React from 'react';
import { Link } from 'react-router-dom';

const Notifications = ({data}) => {
    return (
        <div className='col-md-3'>
            <div className='card'>
                <div className='card-body'>
                    <p>Email:{data.email}</p>
                    <p>Complain:{data.complain}</p>
                   <Link to={`/reply/${data._id}`}><button className='btn btn-warning'>Reply</button></Link> 
                </div>
            </div>
            
        </div>
    );
};

export default Notifications;