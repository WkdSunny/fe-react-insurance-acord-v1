// PrivateRoute.js
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../services/authHandler/auth';

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser ? children : <Navigate to="/signin" state={{ from: location }} replace />;
}

export default PrivateRoute;