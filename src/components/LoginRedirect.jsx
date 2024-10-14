import { Navigate } from 'react-router-dom'
import Home from '../pages/Home';

const LoginRedirect = () => {
    const token = localStorage.getItem('token');
  
    if(!token) {
        return <Navigate to="/login" />
    }

    return <Home />
}

export default LoginRedirect