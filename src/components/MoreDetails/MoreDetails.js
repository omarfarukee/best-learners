import React from 'react';
import {useLoaderData} from 'react-router-dom'
import ('./MoreDetails.css')

const MoreDetails = () => {
    const details = useLoaderData()
    console.log(details)
    return (
        <div className='more'>
                <div className='img-div'>
                    <img className='img' src={details.image} alt="" />
                </div>
                <div className='small'>
                    <h1>{details.name}</h1>
                    <p>{details.about}</p>
                    <div className='time'>
                        <h2 className=''>{details.time}</h2>
                        <h2 className=''>{details.classes}</h2>
                        <h2 className=''>{details.star}</h2>
                        <h2 className=''>{details.badge}</h2>
                    </div>
                    
                </div>
        </div>
    );
};

export default MoreDetails;