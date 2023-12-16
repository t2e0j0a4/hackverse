import "./Courses.css";
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <main className='app__dashboard'>
      <Sidebar/>
      <div className="dashboard__courses">
        <div className='courses__center'>
          Courses
        </div>
      </div>
    </main>
  )
}

export default Dashboard;