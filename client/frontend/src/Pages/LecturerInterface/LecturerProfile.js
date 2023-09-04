import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import './LecturerProfile.css';
import LecNavSideBar from '../../Components/NavigationBar/LecNavSideBar';

export default function LecturerProfile() {
  const [sidebar, setSidebar] = useState(' ');
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={`lecturerdashboard ${sidebar ? 'with-sidebar' : ''}`}>
      <LecNavSideBar sidebar={sidebar} setSidebar={setSidebar} />
      <div className='lec_pro_lecturerprofile'>
        <h2 className="lec_pro_profile-title"><b>Sumudu Akalanka Sandakelum</b></h2>

        <Card className='lec_pro_profile-card'>
          <Card.Header className="lec_pro_profile-card-header">Profile</Card.Header>
          <Card.Body>
            <ul className="lec_pro_profile-details-list">
              <li>
                <strong>Name:</strong> S.A. Sandakelum
              </li>
              <li>
                <strong>Email:</strong> sumuduakalanka@gmail.com
              </li>
              <li>
                <strong>Lecturer ID:</strong> 1200897
              </li>
              <li>
                <strong>Course ID and Name:</strong> 05 - Political Science
              </li>
            </ul>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}