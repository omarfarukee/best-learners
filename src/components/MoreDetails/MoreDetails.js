import React from 'react';
import { FaAngleDoubleRight, FaBook, FaClock, FaDollarSign, FaStar } from 'react-icons/fa';
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
                        <h5 className=''><FaClock></FaClock>{details.time}</h5>
                        <h5 className=''><FaBook></FaBook>{details.classes}</h5>
                        <h5 className=''><FaStar></FaStar>{details.star}</h5>
                        <h5><FaDollarSign></FaDollarSign>{details.price}</h5>
                    </div>

                  <Link to='/premium' className='ms-4'><button className='premium'>Get Premium <FaAngleDoubleRight></FaAngleDoubleRight></button></Link>  
                </div>
        </div>
    );
};

export default MoreDetails;