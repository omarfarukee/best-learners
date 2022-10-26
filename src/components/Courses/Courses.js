import React from  'react';
import {useLoaderData} from 'react-router-dom'
import CourseCard from '../CourseCard/CourseCard';
import CourseDetails from '../CourseDetails/CourseDetails';
import ('./Course.css')
const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='course-container'>
            
            <div className='courseOne'>
                 <h2 className='title'>Courses</h2>
                 {
                    courses.map(course => <CourseDetails
                    key={course.id}
                    course={course}
                    ></CourseDetails>)
                 }
            </div>
           <div >
                  <h3 className='courseTwo'> h2 this is course 2</h3> 
              <div className='cards p-3'>
                   {
                courses.map(courseCard => <CourseCard
                key={courseCard.id}
                courseCard={courseCard}
                > </CourseCard>)
              }
              </div>
           
           </div>

        </div>
    );
};

export default Courses;