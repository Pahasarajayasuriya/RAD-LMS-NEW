import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './StudentDashboard.css';
import NavSideBar from '../../Components/NavigationBar/NavSideBar';

export default function StudentDashboard() {
  const [sidebar, setSidebar] = useState(' ');
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={`studentdashboard ${sidebar ? 'with-sidebar' : ''}`}>
      <NavSideBar sidebar={sidebar} setSidebar={setSidebar} />
      <div className='stu_dash_studentdashboard'>
        <Card className='stu_dash_dashboard-card01'>
          <Card.Body>
            <Card.Title className="stu_dash_dashboard-card-title01">Computer Network</Card.Title>
            <Card.Text className="stu_dash_dashboard-card-text01">
              Explore the world of computer networks and connectivity.
            </Card.Text>
            <Button variant="primary" className="stu_dash_dashboard-button01">Go to the Module</Button>
          </Card.Body>
        </Card>

        <Card className='stu_dash_dashboard-card02'>
          <Card.Body>
            <Card.Title className="stu_dash_dashboard-card-title02">Mathematic Methods</Card.Title>
            <Card.Text className="stu_dash_dashboard-card-text02">
              Explore the world of computer networks and connectivity.
            </Card.Text>
            <Button variant="primary" className="stu_dash_dashboard-button02">Go to the Module</Button>
          </Card.Body>
        </Card>

        <Card className='stu_dash_dashboard-card03'>
          <Card.Body>
            <Card.Title className="stu_dash_dashboard-card-title03">Software engineering</Card.Title>
            <Card.Text className="stu_dash_dashboard-card-text03">
              Explore the world of computer networks and connectivity.
            </Card.Text>
            <Button variant="primary" className="stu_dash_dashboard-button03">Go to the Module</Button>
          </Card.Body>
        </Card>

        <Card className='stu_dash_dashboard-card04'>
          <Card.Body>
            <Card.Title className="stu_dash_dashboard-card-title04">Functional Programming</Card.Title>
            <Card.Text className="stu_dash_dashboard-card-text04">
              Explore the world of computer networks and connectivity.
            </Card.Text>
            <Button variant="primary" className="stu_dash_dashboard-button04">Go to the Module</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

{/* <Card className='card02' >
  <Card.Body>
    <Card.Title><b><u>Mathematic Methods</u></b></Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go to the Module</Button>
  </Card.Body>
</Card> */}