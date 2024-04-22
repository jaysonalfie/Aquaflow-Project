import React from "react";
import Navbar from "./Navbar";
import "./style.css";
import deliveryman from "../images/man delivery1.jpg";

const Home = () => {
  return (
    <div>
      <section className="section1">
        <article>
        <h1>Each drop will make you fresh and cool</h1>
          <p>
            Water is just not a resource.It's the essence of life itself.<br/> Join
            as we delve into the depths of this vital element
          </p>
        </article>

        <article>
        <img src={deliveryman} className="deliveryman"/>
        </article>
      </section>
      <section></section>
    </div>
  );
};

export default Home;
