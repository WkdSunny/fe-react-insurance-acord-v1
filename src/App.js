import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Profile from './pages/profile';
import Settings from './pages/settings';
import NoPage from './pages/noPage';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import SignOut from './pages/signOut';
import { AuthProvider } from './services/authHandler/auth';
import PrivateRoute from './components/common/privateRoute';
import PublicRoute from './components/common/publicRoute';
import { Feedback, Support } from './components/common/buttons';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
          <Route path="/feedback" element={<PrivateRoute><Feedback /></PrivateRoute>} />
          <Route path="/support" element={<PrivateRoute><Support /></PrivateRoute>} />
          <Route path="/signout" element={<PrivateRoute><SignOut /></PrivateRoute>} /> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;