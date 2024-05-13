import React from "react";
import logo from "../../images/logo2.GIF";
import '../about/style2.css'
import {useForm} from "react-hook-form"
import { NavLink } from "react-router-dom";

const Login = () => {

  const {register, handleSubmit, formState:{errors} }= useForm;
  //
  // fetching from database
  // const onFormSubmit = async (data) => {
  //   try {
  //     // Send a request to the backend API with the form data (username and password)
  //     const response = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     });

  //     const result = await response.json();

  //     if (response.ok) {
  //       // Handle successful login
  //       // e.g., store the user data in state or local storage, redirect to dashboard, etc.
  //     } else {
  //       // Handle login error
  //       // e.g., display an error message to the user
  //     }
  //   } catch (error) {
  //     // Handle network or other errors
  //     console.error('Error:', error);
  //   }
  // };

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
                <input 
                type="text" 
                name="username"
                {...register("username", {required:"Username is required"})} />
                {errors.username && <small>{errors.username.message}</small>}
              </span>
            </label>
          </div>
          <div>
            <label>
              Password
              <span>
                <input
                 type="password" 
                 name="password"
                 {...register("password", {required:"Password is required"})} />

               {errors.username && <small>{errors.password.message}</small>}
                
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
