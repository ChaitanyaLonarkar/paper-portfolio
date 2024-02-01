import React from "react";
import img6 from "../src/assets/images/img6.png";
import img7 from "../src/assets/images/img7.jpeg";

export default function Section3() {
  return (
    <>
      <div className="outer">
        <div className="left-elem">
          <div className="left-up">
            <div className="elem-1">
              <h2>UPCOMING NEXT</h2>
              <h4>
                Fresh entry - A selected work from the latest digital releases.{" "}
              </h4>
              <p>
                <b>TIP!</b>Click on the image to explore
              </p>
            </div>
            <div className="elem-2">
              <div className="img6">
                <img src={img6} alt="" />
              </div>
              <h4>UNEXPECTED TIME</h4>
              <p>
                Unexpected Time is a classic-furitistic gamification web
                experience showcasing the lost history & culture in a world
                dominated by the virtual reality.{" "}
              </p>
            </div>
          </div>
          <div className="left-botm">
            <img src={img7} alt="" />
          </div>
        </div>
        <div className="right-elem">
          <h2>THINK, CREATE</h2>
          <h1>DELIVER</h1>
          <p>
            A strong project is created by deep collaboration. I design,
            develop, and deliver websites that drive results and win awards.
          </p>
          <p>
            Like an artisan, I like to start from raw matter and give life to an
            iconic product that makes your brand stand out, starting from a
            Visual Strategy that guide the client’s vision to reality.
          </p>
          <div className="all-work">
            <h4>ALL WORK</h4>
          </div>
        </div>
        <div className="outer-botm-elem">
          <div className="horizontal">
            <div>
              <h3>Site of the day</h3>
              <h2>AWARDS</h2>
            </div>
            <div className="num">
              <h1>9</h1>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
