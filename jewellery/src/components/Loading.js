import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loading = () => {
  let bigLogo = useRef(null);
  let overlay = useRef(null);
  let loadingScreen = useRef(null);

  useEffect(() => {
    //--------------------loading-------
    let tl = gsap.timeline();
    tl.to(bigLogo, { duration: 2, color: "#fff" });
    tl.to(overlay, { duration: 1.6, y: "-100vh", ease: "power3.inOut" });
    tl.to(overlay, { display: "none" });
    tl.to(loadingScreen, { display: "none" });
  }, []);

  return (
    <div
      className="loading"
      ref={(el) => {
        loadingScreen = el;
      }}
    >
      <div
        className="loading__overlay"
        ref={(el) => {
          overlay = el;
        }}
      >
        <div className="loading__logo">
          <h1
            className="loading__big_logo"
            ref={(el) => {
              bigLogo = el;
            }}
          >
            TIRA
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
