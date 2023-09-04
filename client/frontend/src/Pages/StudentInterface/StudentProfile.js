import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './StudentProfile.css';
import NavSideBar from '../../Components/NavigationBar/NavSideBar';

export default function StudentProfile() {
  const [sidebar, setSidebar] = useState(' ');
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={`studentprofile ${sidebar ? 'with-sidebar' : ''}`}>
        <NavSideBar sidebar={sidebar} setSidebar={setSidebar} />
        <h2 className="stu_pro_profile-title"><b>T.B.A. Jayadewa</b></h2>

        <Card className='stu_pro_profile-card'>
          <Card.Header className="stu_pro_profile-card-header">Profile</Card.Header>
          <Card.Body>
            <ul className="stu_pro_profile-details-list">
              <li>
                <strong>Name:</strong> T.B.A. Jayadewa
              </li>
              <li>
                <strong>Email:</strong> bimsarajayadewa@gmail.com
              </li>
              <li>
                <strong>Registration Number:</strong> 2021cs085
              </li>
              <li>
                <strong>City/Town:</strong> Colombo
              </li>
            </ul>
          </Card.Body>
        </Card>
      </div>
      <div className='stu_pro_moduleprofile'>
        <Card className='stu_pro_moduleprofile-card'>
          <Card.Header className="stu_pro_moduleprofile-card-header">Module Profile</Card.Header>
          <Card.Body>
            <ul className="stu_pro_moduleprofile-details-list">
            <li>SCS2202 Group Project I</li>
              <li>SCS2208 Rapid Application Development</li>
              <li>SCS2207 Programming Language Concepts</li>
              <li>SCS2206 Mathematical Methods II</li>
              <li>SCS2205 Computer Networks I</li>
              <li>SCS2204 Functional Programming</li>
              <li>SCS2203 Software Engineering III</li>
              <li>SCS2201 Data Structures and Algorithms III</li>
              {/* link ekak dapan metanata */}
            </ul>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
