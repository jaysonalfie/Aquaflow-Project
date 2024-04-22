/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "./Navbar";
import "./style.css";
import deliveryman from "../images/man delivery1.jpg";

const Home = () => {
  return (
    <div>
      <section className="section1">
        <article>
        <p className="heading">Each drop will <br/> make you fresh <br/> and cool</p>
          <p className="water">
            Water is just not a resource.It's the essence of life itself. Join
            as we delve into the depths of this vital element
          </p>
          <button className="btn">Our services</button>
          <button className="btn2">discover</button>
        

        
         
    
        </article>
        <img src={deliveryman} className="deliveryman"/>
        </section>
      <section></section>
    </div>
  );
};

export default Home;
