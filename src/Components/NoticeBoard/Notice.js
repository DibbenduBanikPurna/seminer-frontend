import React from 'react';

const Notice = ({data}) => {
    return (
        <div className='col-md-6'>
            <div className='card'>
                <div className='card-body'>
                    <p>{data.notice}</p>
                    <span>{data.time}</span>
                    <span className='m-4'>{data.tarikh}</span>
                </div>
            </div>
            
        </div>
    );
};

export default Notice;