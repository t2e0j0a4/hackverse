import React from 'react'
import {Routes, Route} from "react-router-dom";

// Pages
import Login from './pages/Login/Login';
import Events from './pages/Events/Events';
import Courses from './pages/Courses/Courses';
import Profile from './pages/Profile/Profile';
import Registration from './pages/Register/Registration';

const App = () => {
  return (
    <main className="app">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/register' element={<Registration/>} />
      </Routes>
    </main>
  )
}

export default App