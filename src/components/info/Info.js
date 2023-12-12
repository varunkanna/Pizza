import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="info-sec">
      <div className="info-sec-head">
        <p className="info-sec-head-text">
          <i className="i-color">Get it</i> while it's hot
        </p>
      </div>
      <div className="info-sec-body">
        <div className="info-sec-left">
          <p className="info-sec-body-hd">We're careful</p>
          <span className="info-sec-body-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            deserunt magni corrupti impedit libero ullam nostrum voluptatibus
            sint, deleniti animi placeat harum eum tenetur molestiae quas
            laboriosam eius ducimus autem.
          </span>
        </div>
        <div className="info-sec-right">
          <p className="info-sec-body-hd">We're certified</p>
          <span className="info-sec-body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sunt
            eaque cumque dolores natus magnam pariatur, hic quo harum error
            reiciendis voluptatibus deleniti molestiae repellat accusamus ex
            aliquid! Nam, error.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
