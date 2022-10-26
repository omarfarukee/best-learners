import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
        <div>
            <h2>this is register</h2>
            <div className='from-container'>
               
            <div className='login'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        
                    </Form.Group>
                   <button className='btn-1'>
                        Login
                   </button> <br />
                   <p className='text-dark'>{error}</p>
                </Form>
                <small>New in Here? <Link to='/register'>Create Account</Link></small>
            </div>
        </div>
            

        </div>
    );
};

export default Login;