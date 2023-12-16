import "./Events.css";
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <main className='app__dashboard'>
      <Sidebar/>
      <div className="dashboard__events">
        <div className='events__center'>
          Events
        </div>
      </div>
    </main>
  )
}

export default Dashboard