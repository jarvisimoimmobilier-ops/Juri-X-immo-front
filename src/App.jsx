import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ScrollToTop from './components/ScrollToTop';
// ... other imports

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this component right after Router */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        
        {/* Protected routes */}
        <Route
          path="/profil"
          element={
            <PrivateRoute>
              <Layout>
                <Profile />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/conversations"
          element={
            <PrivateRoute>
              <Layout>
                <Conversations />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;