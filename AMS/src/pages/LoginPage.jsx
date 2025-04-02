import React from 'react';
import './LoginPage.css';
 // Adjust path if needed
import Button from '../components/Button';
const LoginPage = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <h1>Login Page</h1>
        <label>Email:</label>
        <input type="email" placeholder="Enter email" required />
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Enter password" required />
        <br />
        <Button text="Submit"/>
      </form>
    </div>
  );
};

export default LoginPage;