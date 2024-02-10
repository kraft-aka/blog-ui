import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../providers/authProvider';

const PublicRoutes = () => {
  const { token } = useAuth();
  if (token) {
    return (<Navigate to='/user' />)
  }
  return (<Outlet />)
}


export default PublicRoutes;