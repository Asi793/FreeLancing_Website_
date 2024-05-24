// ForgotPassword.js
import React, { useState } from 'react';
import './forgotpassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://your-backend-api.com/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password reset link has been sent to your email.');
      } else {
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setMessage('Failed to send reset link. Please try again later.');
    }
  };

  return (
    <div className='password'>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className='email'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='submit'>
        <button type="submit">Send Reset Link</button>
        </div>
        
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotPassword;
