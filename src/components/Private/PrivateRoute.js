import  React , { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextProver/ContextProvider';
import Spinner from 'react-bootstrap/Spinner';
const PrivateRoute = ({children}) => {
const {user, loading} = useContext(AuthContext)
const location = useLocation()
 if( loading){
    return <div className='text-center mt-5'> <Spinner animation="border" variant="primary" /></div> 
}
if(!user) {
 return <Navigate to='/login' state={{from : location}} replace></Navigate>
}
return children
};

export default PrivateRoute;