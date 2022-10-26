import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../ContextProver/ContextProvider';
import ('./Register.css')
const Register = () => {
    const {signInWithGoogle} = useContext(AuthContext)
  const handleRegister = (event) =>{
    event.preventDefault() 
    const form = event.target
    const name= form.name.value 
    // const photo = form.photo.value
    const email = form.email.value 
    const password = form.password.value 
    console.log( name, email, password)

  }
   const handleGoogle = () =>{
      signInWithGoogle()
      .then(result => {
        const user = result.user
        console.log(user)
      })
      .catch(error =>{
        console.error(error)
      })
   }
    return (
        <div>
            <h2>this is register</h2>
            <div className='from-container'>
               
                <div className='register'>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
                    </Form.Group>
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
                        Register
                   </button> <br />
                   
                </Form>
                    <button onClick={handleGoogle} className='btn-2'>
                        Sign in with Google
                   </button>
            </div>
        </div>
            

        </div>
    );
};

export default Register;