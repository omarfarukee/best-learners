import React from   'react';
import ('./CourseDetails.css')
const CourseDetails = ({course}) => {
    const { name } = course
    return (
        <div>
                <h5><button className='btn-btn'>{name}</button></h5> 
        </div>
    );
};

export default CourseDetails;