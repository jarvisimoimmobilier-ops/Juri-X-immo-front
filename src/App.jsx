import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Layout from './layout';
import Profile from './pages/Profile';
import Avatars from './pages/Avatars';
import Payout from './pages/Payout';
import Login from './pages/Login';
import Register from './components/auth/Register';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<Layout><Profile /></Layout>} />
      <Route path="/avatars" element={<Layout><Avatars /></Layout>} />
      <Route path="/payout" element={<Layout><Payout /></Layout>} />
    </Routes>
  </Router>
  )
}

export default App
