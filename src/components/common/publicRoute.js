// PublicRoute.js
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../services/authHandler/auth';

function PublicRoute({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser ? <Navigate to="/profile" state={{ from: location }} replace /> : children;
}

export default PublicRoute;