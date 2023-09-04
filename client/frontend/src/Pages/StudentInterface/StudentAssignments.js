import React, { useState } from 'react';
import './StudentAssignments.css';
import NavSideBar from '../../Components/NavigationBar/NavSideBar';

export default function StudentAssignments() {
  const [sidebar, setSidebar] = useState(' ');
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={`studentprofile ${sidebar ? 'with-sidebar' : ''}`}>
      <NavSideBar sidebar={sidebar} setSidebar={setSidebar} />
      <h2>assignments</h2>
    </div>
  )
}