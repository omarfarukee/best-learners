import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle, FaRegistered, FaUserClock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextProver/ContextProvider';
import pic2 from '../../images/pngwing.com (2).png'
import ('./Register.css')
const Register = () => {
    const {signInWithGoogle, registerLogin, updateUserProfile, signInWithGithub} = useContext(AuthContext)
    const [error, setError] = useState('')
const navigate = useNavigate()
  const handleRegister = (event) =>{
    event.preventDefault() 
    const form = event.target
    const name= form.name.value 
    const photoURL = form.photoURL.value
    const email = form.email.value 
    const password = form.password.value 
    console.log( name, email, password, photoURL)
    registerLogin(email, password)
    .then(result => {
        const user = result.user
        console.log(user)
        setError('')
        handleProfile(name, photoURL)
        form.reset('')
        navigate('/')
    })
    .catch(error => {
        console.error(error)
        setError(error.message)
    })
  }
  const handleProfile = (name, photoURL) =>{
    const profile ={
        displayName : name,
        photoURL : photoURL
    }
    updateUserProfile(profile)
    .then(() => {})
    .catch(error => console.error(error))
}
   const handleGoogle = () =>{
      signInWithGoogle()
      .then(result => {
        const user = result.user
        console.log(user)
        navigate('/')
      })
      .catch(error =>{
        console.error(error)
      })
   }
   const handleGitHub = () =>{
    signInWithGithub()
      .then(result => {
        const user = result.user
        console.log(user)
        navigate('/')
      })
      .catch(error =>{
        console.error(error)
      })
   }
    return (
        <div className='reg-con'>
          <div>
               <img className='pic-2' src={pic2} alt="" />
          </div>
            <div className='from-container'>
            <div className='register'>
              <h2 className='fw-bold border-bottom'>Register</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Full Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Photo URL</Form.Label>
                        <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p className='text fw-bold'>{error}</p>
                    </Form.Group>
                   <button className='btn-1'>
                     <FaUserClock></FaUserClock> Register
                   </button> <br />
                   
                </Form>
                    <button onClick={handleGoogle} className='btn-2 mb-3'>
                    <FaGoogle></FaGoogle> Sign up with Google
                   </button> <br />
                   <button onClick={handleGitHub} className='btn-3'>
                    <FaGithub></FaGithub> Sign up with gitHub
                   </button>
                   <small><span className='fw-bold'>Already have account ?</span> <Link  to='/login'><span className='text-dark fw-bold'>Login</span> </Link></small>
            </div>
        </div>
            

        </div>
    );
};

export default Register;