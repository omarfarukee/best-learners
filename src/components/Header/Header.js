import React,{useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom'
import { FaUserAlt, FaUserCircle} from 'react-icons/fa'
import pic from '../../images/logo (1).png'
import { AuthContext } from '../ContextProver/ContextProvider';
import ('./Header.css')


const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
}
  console.log(user)
    return (
        <div className=''>
            <>
      {[ 'sm'].map((expand) => (
        <Navbar key={expand}  expand={expand} className=" nav">
          <Container fluid className='ps-5'>
                <img className='logo' src={pic} alt="" />
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
                  <Nav.Link ><Link className='link' >Mood</Link></Nav.Link>
                  {/* <Nav.Link className='link'>{user?.displayName}</Nav.Link> */}
                 <div className='mt-2 ms-2'>
                {

                  user?.photoURL ?  <img className='pic' src={user.photoURL} alt="" />
                  
                  :<FaUserCircle className='fs-2'></FaUserCircle>
                }
                  </div> 
                  {
                  user?.uid ? <Button onClick={handleLogOut} className='ms-2' variant="dark">Log-Out</Button> : 
                  <Link to='/register'><Button  className='ms-2' variant="dark"> register</Button></Link>
                }
                {
                  user?.uid ?<></> : 
                  <Link to='/login'><Button  className='ms-2' variant="dark">Login</Button></Link>
                }
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