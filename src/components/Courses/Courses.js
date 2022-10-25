import React from  'react';
import {useLoaderData} from 'react-router-dom'
import CourseDetails from '../CourseDetails/CourseDetails';
import ('./Course.css')
const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='course-container'>
            <div className='courseOne'>
                 <h2>this is Courses : {courses.length}</h2>
                 {
                    courses.map(course => <CourseDetails
                    key={course.id}
                    course={course}
                    ></CourseDetails>)
                 }
            </div>
           <div className='courseTwo'>
              <h3> h2 this is course 2</h3> 
           </div>

        </div>
    );
};

export default Courses;