import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom'
import ('./Header.css')
const Header = () => {
    return (
        <div>
            <>
      {[ 'sm'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3 nav">
          <Container fluid>
            <Navbar.Brand className='text-size'>Best Learner's</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link ><Link className='link' to='/home'>Home</Link></Nav.Link>
                  <Nav.Link ><Link className='link' to='/courses'>Courses</Link></Nav.Link>
                  <Nav.Link ><Link className='link' to='/blog'>BLog</Link></Nav.Link>
                  <Nav.Link ><Link className='link' to='/faq'>FAQ</Link></Nav.Link>
                  <Nav.Link ><Link className='link' to='/login'>login</Link></Nav.Link>
                  <Nav.Link ><Link className='link' to='/register'>Register</Link></Nav.Link>
                  <Nav.Link ><Link className='link' >Mood</Link></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
        </div>
    );
};

export default Header;