import React from "react";
import img4 from "../src/assets/images/star4.jpeg";
import img3 from "../src/assets/images/face3.jpeg";
import img5 from "../src/assets/images/img5.png";

export default function Section2() {
  return (
    <>
      <div className="section2">
        <div className="left-elem">
          <div className="left-up">
            <h2>INTERACTIVE</h2>
            <h2>ARTIST</h2>
          </div>
          <div className="star-img">
            <img src={img4} alt="" />
          </div>
          <div className="left-text-botom">
            <b>As</b> a multidisciplinary freelancer, I'm passionate about
            creating iconic digital experiences through motion, typography, and
            creative coding for companies and agencies around the world.
          </div>
        </div>
        <div className="right-elem">
          <div className="right-img">
            <img src={img3} alt="" />
          </div>
          <div className="right-bottom">
            <h2>DIGITAL ART DIRECTOR</h2>
            <h2>INTERACTIVE DESIGNER</h2>
            <h2>CREATIVE DEVELOPER</h2>
            <h2>BASED IN AMSTERDAM,NL.</h2>
          </div>
        </div>
      </div>
      <div className="section2-last-elem">
        <div className="website">
          <h1>WEBSITE</h1>
        </div>
        <div className="stamp">
          <img src={img5} alt="" />
        </div>
      </div>
    </>
  );
}
