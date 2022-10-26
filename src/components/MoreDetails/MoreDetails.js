import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import {Link, useLoaderData} from 'react-router-dom'
import ('./MoreDetails.css')

const MoreDetails = () => {
    const details = useLoaderData()
    console.log(details)
    return (
        <div className='more mt-5'>
                <div className='img-div'>
                    <img className='img' src={details.image} alt="" />
                </div>
                <div className='small'>
                    <h1>{details.name}</h1>
                    <p>{details.about}</p>
                    <div className='time'>
                        <h5 className=''>{details.time}</h5>
                        <h5 className=''>{details.classes}</h5>
                        <h5 className=''>{details.star}</h5>
                        <h5 className=''>{details.badge}</h5>
                        <h5>{details.price}</h5>
                    </div>
                  <Link to={`/${details.id}/premium`}><button className='premium'>Get Premium <FaAngleDoubleRight></FaAngleDoubleRight> </button></Link>  
                </div>
        </div>
    );
};

export default MoreDetails;