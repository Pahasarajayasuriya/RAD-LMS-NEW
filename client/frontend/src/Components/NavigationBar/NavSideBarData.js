import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const NavSideBarData = [
    {
        title: 'Home',
        path: '/StudentHome',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/StudentProfile',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Dashboard',
        path: '/StudentDashboard',
        icon: <FaIcons.FaTh />,
        cName: 'nav-text'
    },
    {
        title: 'Assignments',
        path: '/StudentAssignments',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    }
]
