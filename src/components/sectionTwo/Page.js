import React from "react";
import "./Page.css";
import { imageBag } from "../../Const";

const Page = () => {
  const textArr = [
    "Sed ut perspiciatis unde omnis iste natus error sit.",
    "Voluptatem accusantium doloremque laudantium.",
    "Quis autem vel eum iure reprehenderit qui in ea.",
  ];
  return (
    <div className="sec-two">
      <div className="sec-two-part01">
        <p className="sec-two-p">
          The place for <i className="i-color">tasty food</i>
        </p>
      </div>
      {textArr.map((val) => {
        return (
          <div className="sec-two-part02">
            <div className="sec-two-img-part">
              <img src={imageBag.logo} alt="logo-rotate" />
            </div>
            <div className="sec-two-text-part">
              <p className="sec-two-text-part-p">
                {val}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
