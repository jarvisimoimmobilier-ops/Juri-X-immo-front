import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Layout from './layout';
import Profile from './pages/Profile';
import Avatars from './pages/Avatars';
import Payout from './pages/Payout';
import Login from './pages/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />

        {/* Wrap protected routes with PrivateRoute */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Layout>
                <Profile />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/avatars"
          element={
            <PrivateRoute>
              <Layout>
                <Avatars />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/abonnements"
          element={
            <PrivateRoute>
              <Layout>
                <Payout />
              </Layout>
            </PrivateRoute>
          }
        />
        {/* 404 Not Found route - must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
