import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import ('../CourseDetails/CourseDetails.css')
const CourseCard = ({ courseCard }) => {
    const {image, name, classes, time, star, badge, id} = courseCard
    return (
        <div className='course-card p-2'>
            <img className='images-course' src={image} alt="" />
            <div className='mt-3 mb-3'>
                <h4>{name}</h4>
            </div>
            <Link className='card-btn' to={`/categories/${id}`}><button className='btn-see'>See Details <FaArrowAltCircleRight></FaArrowAltCircleRight> </button></Link>
        </div>
    );
};

export default CourseCard;