import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LecNavSideBarData } from './LecNavSideBarData';
import './LecNavSideBar.css';
import { IconContext } from 'react-icons';

export default function LecNavSideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="lec_nav_navsidebar">
          <div className="lec_nav_nav-top">
            <Link to='#' className='lec_nav_menu-bars'>
              <FaIcons.FaBars className='lec_nav_showsidebar' onClick={showSidebar} />
            </Link>
            <Link className="lec_nav_logout-button" to="/login">Logout</Link>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='lec_nav_nav-menu-items' onClick={showSidebar}>
            {LecNavSideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}
