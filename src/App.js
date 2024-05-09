import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import ShopsPage from "./pages/ShopsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

//creating react router for the elements in the application
const router = createBrowserRouter(
  createRoutesFromElements(
    //creating parent route as main layout will be in every page
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/shop" element={<ShopsPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<SignupPage/>}/>
  </Route>
)
)
const App=()=> {
  return <RouterProvider router={router}/>
  
}

export default App;
