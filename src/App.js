import React from "react";
import {BrowserRouter, Routes, Route, createBrowserRouter} from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
