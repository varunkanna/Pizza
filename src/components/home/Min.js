import React from "react";
import "./Home.css";

const Min = () => {
  return (
    <div
      className="box-con"
      style={{
        height: "80vh",
        width: "100%",
        marginLeft: "200px",
        marginTop: "-30px",
        position: "relative",
        zIndex: 99999,
      }}
    >
      <div className="box-1" style={{ zIndex: 2 }}>
        <small className="hd-pizza">pizza</small>
        <p className=""> </p>
      </div>
      <div className="box-2" style={{ zIndex: 2 }}>
        <div className="circle">
          <div className="contact-circle">
            <p>Contact</p>
          </div>
        </div>
        <div className="content">
          <div className="btx-con">
            <p className="side-text">
              Pizzeria <span>in the heart</span> of the town
            </p>
            <span className="p-text">
              Habitasse platea dictumst quisque sagittis purus sit amet
              volutpat. Eros in cursus turpis massa. Mauris sit amet massa vitae
              tortor condimentum lacinia.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Min;
