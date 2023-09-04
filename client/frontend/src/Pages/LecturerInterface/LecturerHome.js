import React, { useState } from 'react';
import './LecturerHome.css';
import LecNavSideBar from '../../Components/NavigationBar/LecNavSideBar';

export default function LectureHome() {
  const [sidebar, setSidebar] = useState(' ');
  const showSidebar = () => setSidebar(!sidebar);

  return (
      <div className={`lecturehome ${sidebar ? 'with-sidebar' : ''}`}>
          <LecNavSideBar sidebar={sidebar} setSidebar={setSidebar} />
          <div className={`card-container ${sidebar ? 'with-sidebar' : ''}`}>
          </div>  
      <div className="lec_home_card-container01">
        <div className='lec_home_card-container0101'>
          <h5><center className='lec_home_card01-text'>Pahasara Higher Education Center</center></h5>
        </div>
      </div>
      <div className="lec_home_card-container02">
        <div className='lec_home_card-container0201'>
          <h5><center className='lec_home_card02-text'>Pahasara Higher Education Center<br/>Welcome to the Virtual Learning Environment for the PHEC Students 2023/2024<br/>PHEC සිසුන් සඳහා වූ අතථ්‍ය ඉගෙනුම් පරිස්ථිතියට ඔබව සාදරයෙන් පිළිගනිමු!<br/>PHEC மாணவர்களை LMSற்கு வரவேற்கிறோம்</center></h5>
        </div>
      </div>
    </div>
  );
}