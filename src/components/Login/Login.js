import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FaUserCheck } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import pic from '../../images/pngwing.com (1).png';
import { AuthContext } from '../ContextProver/ContextProvider';
import ('../Register/Register.css')
const Login = () => {
    const {login} = useContext(AuthContext)

    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value 
        const password = form.password.value 
        console.log(email, password)

        login(email, password)
        .then(result => {
            const user = result.user
            form.reset('')
            console.log(user)
            setError('')
            navigate(from, {replace : true})
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }
    return (
        <div className='login-container'>
            <div>
                <img className='pic-1' src={pic} alt="" />
            </div>
            <div className='from-container'>
               
            <div className='login'>
                <Form onSubmit={handleLogin}>
                    <h2 className='fw-bold border-bottom'>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        
                    </Form.Group>
                   <button className='btn-1 fw-bold fs-5'>
                    <FaUserCheck></FaUserCheck> Login
                   </button> <br />
                   <p className='text-white'>{error}</p>
                </Form>
                <small><span className='fw-bold'>New in Here?</span> <Link to='/register'><span className='fw-bold text-dark'> Create Account</span></Link></small>
            </div>
        </div>
            

        </div>
    );
};

export default Login;