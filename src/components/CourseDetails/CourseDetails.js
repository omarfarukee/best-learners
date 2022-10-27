import React from  'react';
import {Link} from 'react-router-dom'

import ('./CourseDetails.css')
const CourseDetails = ({course}) => {
    const { name, id } = course
    return (
        <div>
          <h5><button className='btn-btn-course'><Link className='link-course' to={`/categories/${id}`}> {name}</Link> </button></h5>  
        </div>
    );
};

export default CourseDetails;