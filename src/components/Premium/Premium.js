import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ('./Premium.css')
const Premium = () => {
    const preCard = useLoaderData();
     const {name, image, classes, time, price, about} = preCard
    return (
    <div className='premium-pre'>
        <Card className='card'>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {about}
                </Card.Text>
                
            </Card.Body>
        </Card>
        </div>
    );
};

export default Premium;