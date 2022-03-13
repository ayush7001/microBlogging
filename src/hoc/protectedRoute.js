import {useLocation, Navigate} from 'react-router';
import authService from '../shared/services/authService';
const ProtectedRoute = ({children}) => {
    let location = useLocation();
    if(!authService.isUserLoggedIn()) {
        return <Navigate to="/" state={{from: location}} replace />
    }
    return children;
}

export default ProtectedRoute