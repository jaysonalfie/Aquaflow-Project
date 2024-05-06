import React from "react";
import Hero from "./about/Hero";
import Hero2 from "./about/Hero2";
import Hero3 from "./about/Hero3";


const About =()=>{
    return(
        <div>
            <section>
            <Hero/>
            </section>
            <section>
                <Hero2/>
            </section>
            <section>
                <Hero3/>
            </section>
            
        </div>
    )
}

export default About;