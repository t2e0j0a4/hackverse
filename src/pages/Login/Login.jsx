import "./Login.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  })

  const validateLoginForm = (e) => {
    e.preventDefault();
  }

  return (
    <main className="app__login">
      <h1>Login</h1>
      <form className="login__form" onSubmit={(e) => {validateLoginForm(e)}}>
        <input type="email" name="email" value={loginDetails.email} onChange={(e) => {
          setLoginDetails({...loginDetails, [e.target.name]: e.target.value});
        }} placeholder="Email" />
        <input type="password" name="password" value={loginDetails.password} onChange={(e) => {
          setLoginDetails({...loginDetails, [e.target.name]: e.target.value});
        }} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>New User? <Link to={"/register"}>Register</Link></p>
    </main>
  )
}

export default Login