
import React, { useState } from 'react';
import './FormToSignUp.css';

const FormToSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-field">
          <input 
            type="text" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Enter your email</label>
        </div>
        <div className="input-field">
          <input 
            type="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Enter your password</label>
        </div>
        <div className="forget">
          <label htmlFor="remember">
            <input 
              type="checkbox" 
              id="remember" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <p>Remember me</p>
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Log In</button>
        <div className="register">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default FormToSignUp;
