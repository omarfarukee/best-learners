import React,{useContext, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom'
import { FaUserAlt, FaUserCircle, FaHome, FaBookOpen,FaMicroblog,FaQuestion, 
FaSun, FaMoon, FaRegSun} from 'react-icons/fa'
import pic from '../../images/logo (1).png'
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { AuthContext } from '../ContextProver/ContextProvider';
import ('./Header.css')


const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
}
const [mood, setMood] = useState(
  localStorage.getItem('theme') || 'light'
 );
 const handleMood= () => {
  if (mood === 'light') {
      setMood('dark');
  }
  else {
      setMood('light')
  }
 }
 useEffect(() => {
  localStorage.setItem('theme', mood);
  document.body.className = mood;
   }, [mood])
    return (
        <div className=''>
            <>
      {[ 'sm'].map((expand) => (
        <Navbar key={expand}  expand={expand} className=" nav">
          <Container fluid className=''>
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
                 Best Learners
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link ><FaHome className='mb-1 text-dark'></FaHome><Link className='link' to='/'>Home</Link></Nav.Link>
                  <Nav.Link ><FaBookOpen className='mb-1 text-dark'></FaBookOpen> <Link className='link' to='/courses'>Courses</Link></Nav.Link>
                  <Nav.Link ><FaMicroblog className='mb-1 text-dark'></FaMicroblog><Link className='link' to='/blog'>BLog</Link></Nav.Link>
                  <Nav.Link ><FaQuestion className='mb-1 text-dark'></FaQuestion><Link className='link' to='/faq'>FAQ</Link></Nav.Link>
                  <Nav.Link ><Link className='link ' to='/error'>Error</Link></Nav.Link>
                  <Link className={`Header ${mood}`} onClick={handleMood}><Button className='moodBtn' style={{"borderRadius": "10%"} } variant = {mood}>{mood} {mood === 'light'?
                 <FaRegSun className='sun'></FaRegSun>:
                  <FaMoon className='mb-1'></FaMoon>
                  }
                  </Button></Link>
                  {/* <Nav.Link className='link'>{user?.displayName}</Nav.Link> */}
                 <div className='mt-2 ms-2'>
                
                {

                  user?.photoURL || user?.uid ? <Tippy content={<span className='fw-bold'>{user.displayName}</span>}>
                     <img className='pic-header' src={user.photoURL} alt="" />
                   </Tippy>
                  
                  :<FaUserCircle className='fs-2'></FaUserCircle>
                }
                  </div> 
                  {
                  user?.uid ? <Button onClick={handleLogOut} className='ms-2' variant="danger">Log-Out</Button> : 
                  <Link to='/register'><Button  className='ms-2' variant="primary"> register</Button></Link>
                }
                {
                  user?.uid ?<></> : 
                  <Link to='/login'><Button  className='ms-2' variant="primary">Login</Button></Link>
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