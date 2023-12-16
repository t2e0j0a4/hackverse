import React from 'react';
import "./Sidebar.css";

import { Link } from 'react-router-dom';
import { MdEvent } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className='dashboard__sidebar'>
      <nav className='sidebar__nav'>

        <div className='nav__menu'>
          <Link className='active__page' to="/dashboard"><MdDashboard fontSize={21} />Dashboard</Link>
          <Link to="/dashboard/courses"><SiBookstack fontSize={21} />Courses</Link>
          <Link to="/dashboard/events"><MdEvent fontSize={21} />Events</Link>
          <Link to="/dashboard/profile"><FaRegUserCircle fontSize={21} />Profile</Link>
        </div>

      </nav>
    </aside>
  )
}

export default Sidebar