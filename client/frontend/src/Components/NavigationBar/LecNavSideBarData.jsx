import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const LecNavSideBarData = [
    {
        title: 'Home',
        path: '/LecturerHome',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/LecturerProfile',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Add Course Materials',
        path: '/LecturerDashboard',
        icon: <FaIcons.FaTh />,
        cName: 'nav-text'
    },
    {
        title: 'Add Assignments',
        path: '/LecturerAddAssignments',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: "View Student's Assignments",
        path: '/LecturerViewAssignments',
        icon: <FaIcons.FaAddressCard />,
        cName: 'nav-text'
    }
]
