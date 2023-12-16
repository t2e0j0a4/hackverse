import "./Courses.css";
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

// React Icons
import { IoSearch } from "react-icons/io5";

const Dashboard = () => {
  return (
    <main className='app__dashboard'>
      <Sidebar/>
      <div className="dashboard__courses">
        <div className='courses__center'>
          
          {/* Search Box with Title */}

          <section className="search__box">
            <h2>All Courses</h2>
            <div className="search" >
              <IoSearch className="search__icon" fontSize={24} />
              <input type="text" placeholder="Search Courses" />
            </div>
          </section>

          {/* Search Box with Title */}

          {/* Showing Courses */}

          

          {/* Showing Courses */}

        </div>
      </div>
    </main>
  )
}

export default Dashboard;