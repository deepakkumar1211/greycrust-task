import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="container" id="service">
      <h2 className="heading">The Best Destination</h2>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <div className="image-grid">
        <div className="image-box">
          <img src="./assets/16.png" alt="paris" />
        </div>
        <div className="image-box">
          <img src="./assets/17.png" alt="paris" />
        </div>
        <div className="image-box">
          <img src="./assets/18.png" alt="paris" />
        </div>
      </div>
    </div>
  );
};

export default Service;