import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/AboutPage";

//creating react router for the elements in the application
const router = createBrowserRouter(
  createRoutesFromElements(
    //creatin parent route as main layout will be in every page
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
  </Route>
)
)
const App=()=> {
  return <RouterProvider router={router}/>
  
}

export default App;
