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
                        <h3>Well done <span className='prename'>"{user.displayName}"</span> </h3>
                        <h5>Your Email : <span className='prename'>"{user.email}"</span> </h5>
                        <h5>UID : <span className='prename'>{user.uid}</span> </h5>
                        <button className='btn-btn-pre'><Link to='/' className='back'>Go back home</Link></button>
                     </div>
                </div>
               
            </div>
    );
};

export default Premium;