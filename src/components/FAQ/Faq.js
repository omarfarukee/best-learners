import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ('./Faq.css')
const Faq = () => {
    
    return (
        <div className='qus-f'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header><span className='fw-bold text-danger fs-4'>How Long this course is?</span></Accordion.Header>
        <Accordion.Body>
         Ans: Our overall course is not more than 25 weeks.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><span className='fw-bold text-danger fs-4'>How Many courses you have ?</span></Accordion.Header>
        <Accordion.Body>
        Ans: We provides 25 courses for our students.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><span className='fw-bold text-danger fs-4'>Whats the purpose of this course?</span></Accordion.Header>
        <Accordion.Body>
       Ans: We gives you the best learning ability and support .
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><span className='fw-bold text-danger fs-4'>This course is whom?</span></Accordion.Header>
        <Accordion.Body>
        Ans: Our course can do anybody .
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><span className='fw-bold text-danger fs-4'>So could I take this course?</span></Accordion.Header>
        <Accordion.Body>
        Ans: Yes, of course
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Faq;