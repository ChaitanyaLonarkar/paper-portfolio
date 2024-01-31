import React from "react";
import img1 from "../src/assets/images/lamp1.jpeg"
import img2 from "../src/assets/images/shoe 2.jpeg"

export default function Section1() {
  return (
    <>
      <div className="all-elem">
        <div className="elem elem1">
          <div className="img">
            <img src={img1} alt="lamp" />
          </div>
          <div className="text-head">
            <h4>
              AVRO | KO <span>NEW</span>
            </h4>
          </div>
          <div className="text">
            <p>
              AvroKO is an award-winning global design firm, established itself
              as a global leader in interior architecture for hospitality,
              restaurant and bars.
            </p>
          </div>
        </div>
        <div className="elem2">
          <h2>ALL WORK!</h2>
          <h4>
            A Featured selection <br /> the latest work – <br /> of the last
            years.
          </h4>
          <p><b>TIP!</b> Drag sideways to navigate</p>
        </div>
        <div className="elem elem3">
          <div className="img">
            <img src={img2} alt="shoe" />
          </div>
          <div className="text-head">
            <h4>
              THE ROGER HUB <span>NEW</span>
            </h4>
          </div>
          <div className="text">
            <p>
              The Roger Hub is an immersive web experience showcasing the
              tennis-inspired 'On' sneakers, a collaboration born out of a
              partnership with the legendary Roger Federer.
            </p>
          </div>
        </div>
      </div>
      <div className="big">
        <h1>MIRANDA</h1>
      </div>
    </>
  );
}
