import React from "react";
import logo from "../../images/logo2.GIF";
import '../about/style2.css'
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="form_wrapper">
      <div className="form-header">
        <img src={logo}  className="logo3"/>
        <h2>Login</h2>
        <p className="header">Sign in into your account</p>
      </div>
      <div className="form">
        <form action="submit">
          <div className="text">
            <label>
              Username
              <span>
                <input type="text" name="username" />
              </span>
            </label>
          </div>
          <div>
            <label>
              Password
              <span>
                <input type="text" name="password" />
              </span>
            </label>
          </div>
          <div className="buttondiv">
          <button type="submit" className="btn10">Login</button>
          </div>
          <div className="signdet">
            <p>Don't have an account?<span>
            <NavLink to='/signup'>Sign Up</NavLink>
            </span></p
            >
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
