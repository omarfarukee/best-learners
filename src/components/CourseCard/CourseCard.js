import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import ('../CourseDetails/CourseDetails.css')
const CourseCard = ({ courseCard }) => {
    const {image, name, classes, time, star, badge, id} = courseCard
    return (
        <div  className=' mb-3'>
            <Card className='card-div'>
                <img className='images' src={image} alt="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Button  variant="danger"><Link className='card-btn' to={`/${id}`}>See details</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;