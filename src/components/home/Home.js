import React from "react";
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from "react-scroll-parallax";
import { imageBag } from "../../Const";
import "./Home.css";
import Min from "./Min";
// import { Parallax, Background } from 'react-parallax';

const Home = () => {
  return (
    <ParallaxProvider>
      <div
        className="parallax-container"
        style={{
          position: "relative",
          height: "90vh",
          width: "100%",
          overflow: "hidden"
        }}
      >
        {/* <div
          className="parallax-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // background: "rgba(0, 0, 0, 0.5)",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
            // padding: '0 100px !important'
          }}
        ></div> */}
        <ParallaxBanner
          layers={[
            { image: imageBag.hm_bg, speed: -20, amount: 0.3 },
            {
              children: (
                <Min />
              ),
              amount: 0.3,
            },
          ]}
          className="aspect-[2/1]"
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              height: "100vh",
              width: "100%",
              padding: "0 100px",
              overflow: "hidden",
              position: "relative",
              zIndex: 2,
            }}
          >
          </div>
        </ParallaxBanner>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
