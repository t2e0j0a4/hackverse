import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className="app__login">
      <h1>Login</h1>
      <form className="login__form">
        <input type="text" placeholder="Username/Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>New User? <Link to={"/register"}>Register</Link></p>
    </main>
  )
}

export default Login