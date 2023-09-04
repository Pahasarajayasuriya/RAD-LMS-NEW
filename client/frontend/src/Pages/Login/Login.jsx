import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock login logic - replace with your actual authentication logic
    if (email === 'lec@example.com' && password === '123') {
      onLogin('lecturer'); // Set the user role to 'lecturer'
      navigate('/lecturerhome'); // Navigate to the lecturer home
    }
    else if (email === 'stu@example.com' && password === '123') {
      onLogin('student'); // Set the user role to 'student'
      navigate('/studenthome'); // Navigate to the student home
    }
    else {
      setError('Invalid email or password');
    }
  };

  return (
    <div class="login_center">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} method="post">
        <div class="login_txt_field">      
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span></span>
          <label>Email</ label>
        </div>
        <div class="login_txt_field">          
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span></span>
          <label>Password</label>
        </div>
      <p>
        <Link to="/forgot-password" class="login_pass">Forgot Password?</Link><br />
      </p>
        <button className="login_submit" type="submit">Log In</button>
        {error && <p className='login_error'>{error}</p>}
      </form>

    </div>
  );
}

export default Login;