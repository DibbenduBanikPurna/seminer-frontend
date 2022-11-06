import React from 'react';

const NewMessages = ({data}) => {
    return (
        <div className='col-md-3 mt-5'>
            <div className='card'>
                <div className='card-body bg-dark'>
                    <p className='text-light'>{data.reply}</p>
                </div>
            </div>
            
        </div>
    );
};

export default NewMessages;