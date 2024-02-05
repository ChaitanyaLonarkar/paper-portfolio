import React from "react";
import img8 from "../src/assets/images/img8.jpeg";
import img9 from "../src/assets/images/img9.jpeg";
import img10 from "../src/assets/images/img10.jpeg";

export default function Section4() {
  return (
    <>
      <div className="section4-outer">
        <div className="left-elem">
          <div className="up">
            <img src={img8} alt="" />
            <h1>THE</h1>
          </div>
          <div className="bottom">
            <h1>PIXEL</h1>
          </div>
        </div>
        <div className="right-elem">
          <img src={img9} alt="" />
        </div>
      </div>
      <div className="section4-down-elem">
        <img src={img10} alt="" />
        <h1>PERFECT</h1>
      </div>
    </>
  );
}
