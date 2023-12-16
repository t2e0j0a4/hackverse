import React from 'react'
import {Routes, Route} from "react-router-dom";

// Pages
import Events from './pages/Events/Events';
import Courses from './pages/Courses/Courses';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Registration from './pages/Register/Registration';

const App = () => {
  return (
    <main className="app">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/dashboard/events' element={<Events/>} />
        <Route path='/dashboard/courses' element={<Courses/>} />
        <Route path='/dashboard/profile' element={<Profile/>} />
      </Routes>
    </main>
  )
}

export default App