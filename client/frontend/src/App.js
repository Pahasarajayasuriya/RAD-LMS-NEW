import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import StudentHome from './Pages/StudentInterface/StudentHome';
import StudentDashboard from './Pages/StudentInterface/StudentDashboard';
import StudentProfile from './Pages/StudentInterface/StudentProfile';
import StudentAssignments from './Pages/StudentInterface/StudentAssignments';
import LecturerHome from './Pages/LecturerInterface/LecturerHome';
import LecturerDashboard from './Pages/LecturerInterface/LecturerDashboard';
import LecturerProfile from './Pages/LecturerInterface/LecturerProfile';
import LecturerAddAss from './Pages/LecturerInterface/LecturerAddAss';
import LecturerViewAss from './Pages/LecturerInterface/LecturerViewAss';

function App() {
  const handleLogin = (role) => {
    console.log(`User logged in as ${role}`);
  };

  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/studenthome" element={<StudentHome />} />
            <Route path="/studentdashboard" element={<StudentDashboard />} />
            <Route path="/studentprofile" element={<StudentProfile />} />
            <Route path="/studentassignments" element={<StudentAssignments />} />
          <Route path="/lecturerhome" element={<LecturerHome />} />
            <Route path="/lecturerdashboard" element={<LecturerDashboard />} />
            <Route path="/lecturerprofile" element={<LecturerProfile />} />
            <Route path="/LecturerAddAssignments" element={<LecturerAddAss />} />
            <Route path="/LecturerViewAssignments" element={<LecturerViewAss />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
