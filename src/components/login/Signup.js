import React from "react";
import logo from "../../images/logo2.GIF";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup_wrapper">
      <div>
        <div className="form-header">
          <img src={logo} className="logo3" />
          <h2>Sign Up</h2>
        </div>
      </div>
      <div className="signUp_form">
        <form>
          <div className="text">
            <label>
              Email
              <span>
                <input type="text" name="Email" />
              </span>
            </label>
          </div>
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
                <p className="passwordtxt">-Your password must contain at least 8 characters</p>
              </span>
            </label>
          </div>
          <div>
          <label>
              Password Confirmation
              <span>
                <input type="text" name="password" />
                <p className="passwordtxt">-Enter same passowrd as before for verification</p>
              </span>
            </label>
          </div>
          <div className="buttondiv">
          <button type="submit" className="btn10">Sign Up</button>
          </div>
          <div className="signdet">
            <p>Don't have an account?<span>
            <NavLink to='/login'>Sign In</NavLink>
            </span></p
            >
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
