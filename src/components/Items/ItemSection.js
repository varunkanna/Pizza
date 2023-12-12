import React from "react"; 
import "./ItemSection.css";
import { imageBag } from "../../Const";

const ItemSection = () => {
  return (
    <div className="big-box">
      <div className="item-section">
        <div className="hd-box">
          <p className="hd-content">
            <span>Get your</span> slice of perfection
          </p>
        </div>
      </div>
      <div className="inner-box">
        <div className="bx-2">
          <div className="text-part">
            <p className="frst-p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              sunt provident doloribus est illo recusandae, impedit culpa sequi
              reprehenderit ducimus odio optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              totam! Dolor iste suscipit atque eum neque, blanditiis aspernatur.
            </p>
          </div>
          <div className="img-part">
            <img src={imageBag.secTwoPizza} alt="sec-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSection;
