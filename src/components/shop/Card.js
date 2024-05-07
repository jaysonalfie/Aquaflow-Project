import React from "react";
import Person1 from "../../images/person 7.GIF";
import waterb3 from "../../images/waterb3.jpg";
import "../about/style2.css";

const Card = () => {
  return (
    <div className="Card_wrapper">
      <div className="shophead">
        <img src={Person1} className="shoplogo" />
        <span className="shop_span">
          <p>RubySafe</p>
          <i class="bx bx-heart"></i>
        </span>
      </div>
      <div className="shopproduct">
        <img src={waterb3} />
        <span>
          <div className="productspan">
            <p> 20 litre water</p>
            <div>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bx-star"></i>
            </div>
          </div>
        </span>
        <div>
          <button className="btn7">View Product</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
