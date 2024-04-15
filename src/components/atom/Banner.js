import React from "react";
import left from "../../assets/photos/left.png";
import right from "../../assets/photos/right.png";

import "./Banner.css";
const Banner = () => {
  return (
    <div className="Banner">
      <div className="image">
        <img src={left} alt="left.png"/>
      </div>
      <div className="pick">
        <img src={right} alt="right.png"/>
      </div>
      <div className="top">
        <div className="text">Summer Essentials</div>
        <div className="num">20% off</div>
        <div className="july">19 Jul-30 Jul </div>
      </div>

    </div>
  );
};

export default Banner;
