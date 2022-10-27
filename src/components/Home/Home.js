import React from 'react';
import { FaSmile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import picture from '../../images/pngwing.com.png'
import ('./Home.css')
const Home = () => {
    return (
        <div className='home'>
                <div>
                    <img className='home-img' src={picture} alt="" />
                </div>
                <div className=''>
                    <h1 className='fw-bold'>Hello <span className='text-success'>Learner's</span></h1>
                    <h5>Our Management Team is passionate about making personal development available to everyone. Through their time, effort, and professional skills, they’re making a difference in our community and beyond. Our programs go beyond meeting a need—they create space for growth.</h5>
                <Link to='/courses'> <button className='home-btn'>Get Start <FaSmile></FaSmile></button></Link> 
                </div>
        </div>
    );
};

export default Home;