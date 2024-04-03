import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../services/authHandler/auth';

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser ? children : <Navigate to="/signin" state={{ from: location }} replace />;
}

export default PrivateRoute;

// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../../services/authHandler/pgAuth'; // Import your pgAuth.js file

// function PrivateRoute({ children }) {
//   const { currentUser } = useAuth(); // Use the useAuth function from pgAuth.js
//   const location = useLocation();

//   return currentUser ? children : <Navigate to="/signin" state={{ from: location }} replace />;
// }

// export default PrivateRoute;