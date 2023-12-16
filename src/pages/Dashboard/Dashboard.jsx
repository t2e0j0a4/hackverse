import React from 'react'
import "./Dashboard.css";
import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <main className='app__dashboard'>
      <Sidebar/>
      <div className="dashboard__home">
        <div className='dashboard__main'></div>
      </div>
    </main>
  )
}

export default Dashboard;