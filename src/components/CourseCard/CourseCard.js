import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ('../CourseDetails/CourseDetails.css')
const CourseCard = ({ courseCard }) => {
    const {image, name, classes, time, star, badge} = courseCard
    return (
        <div  className=' mb-3'>
            <Card className='card-div'>
                <img className='images' src={image} alt="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Button variant="primary">See Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;