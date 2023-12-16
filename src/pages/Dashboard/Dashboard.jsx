import "./Dashboard.css";
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <main className='app__dashboard'>
      <Sidebar/>
      <div className="dashboard__home">
        <div className='home__center'>
          Home
        </div>
      </div>
    </main>
  )
}

export default Dashboard