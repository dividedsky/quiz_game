import React from 'react';
import LoginForm from '../LoginForm';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="text-box">
        <h1 className="main-header">Quiz Game!</h1>
      </div>
      <LoginForm />
    </div>
  );
};

export default LandingPage;
