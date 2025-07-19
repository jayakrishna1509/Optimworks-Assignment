import React from 'react'
import { Navigate } from 'react-router-dom';

const AuthenticatedRoute = ({ children }) => {
  const getAuthData = () => {
    const admin = localStorage.getItem('Admin');
    const user = localStorage.getItem('user');
    const doctor = localStorage.getItem('Doctor');
    
    return admin || user || doctor;
  };

  if (getAuthData()) {
    sessionStorage.setItem("referrer", window.location.href.substring(21));
    return children;
  }
  
  return <Navigate to="/" />;
};

export default AuthenticatedRoute;