import React from "react";
import logo2 from "../images/logo2.GIF";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="left-details">
         <div>
         <img src={logo2} />
          <span>Aquaflow</span>
         </div>
         <div>
            <h2>Delivering the purest form of water for healthy living</h2>
            <p>open hours stated<br/>
            Mon - Sat : 6am - 9pm<br/>
            Weekends Open
            </p>
         </div>
        </div>
        <div className="left-middle">
        <i class='bx bx-location-plus'> 5th floor ambasador, Nairobi, 098-90</i>
        <i class='bx bx-phone-call' > Call us 0n ; +254 111 266 551 /
        +254 772 437 010</i>
        
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Footer;
