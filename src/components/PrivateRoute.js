// src/routes/PrivateRoute.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Redirect to login if the token is missing
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  // Only render children if the token exists
  return localStorage.getItem("token") ? children : null;
};

export default PrivateRoute;
