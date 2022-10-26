import React, { useContext } from 'react';
import { FaAlignRight, FaArrowRight, FaCheckDouble, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextProver/ContextProvider';

import ('./Premium.css')
const Premium = () => {
    const {user} = useContext(AuthContext)
    return (
            <div className='d-flex justify-content-center'> 

                <div className='card-c'>
                    <h3> YEA ! your premium access done <FaCheckDouble className='check'></FaCheckDouble></h3>
                   {user?.photoURL ? <img className='img-pre' src={user.photoURL} alt="" />:
                   <FaUserAlt className='users'></FaUserAlt>}
                     <div>
                        <h3>Welcome "{user.displayName}"</h3>
                        <h5>Your Email :"{user.email}"</h5>
                        <h5>UID : {user.uid}</h5>
                        <button className='btn-btn-pre'><Link to='/' className='back'>Go back home</Link></button>
                     </div>
                </div>
               
            </div>
    );
};

export default Premium;