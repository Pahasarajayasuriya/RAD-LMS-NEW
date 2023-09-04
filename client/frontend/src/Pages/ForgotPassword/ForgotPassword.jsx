import React, { useState } from 'react';
import "./ForgotPassword.css"

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validEmail, setValidEmail] = useState(true);    

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setMessage('Password reset email sent successfully.');
      setValidEmail(true);
      setTimeout(() => {
        setMessage('');
        setValidEmail(true);
      }, 5000);
    } else {
      setMessage('Please enter a valid email address.');
      setValidEmail(false);
      setTimeout(() => {
        setMessage('');
        setValidEmail(false);
      }, 5000);
    }
  };

  return (
    <div className='forgot_password_center'>
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <div class="forgot_password_txt_field">          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={validEmail ? '' : 'invalid-email'}
          />
          <span></span>
          <label>Email</label>
        </div>
        <button type="submit" className="forgot_password_submit">Reset Password</button>
      </form>
      {message && <p className={validEmail ? 'success' : 'error'} >{message}</p>}
    </div>
  );
}

export default ForgotPassword;