import React, { useEffect, useRef } from "react";
import ImageHalf from "../../images/joeyy_lee_7tdqxrc8hh_TjQPx.jpg";
import gsap from "gsap";

const HomeImage = () => {
  let homeImage = useRef(null);
  useEffect(() => {

    gsap.to(
      homeImage,
      {
        scrollTrigger: {
          trigger: homeImage,
          start: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: true,
        },
        transform: "matrix(1.1,0,0,1.1,0, 0)",
      },
      []
    );
  });

  return (
    <section
      className="Home_image"
      style={{ overflow: "hidden" }}
      ref={(el) => {
        homeImage = el;
      }}
    >
      <div className="Home_image_img">
        <img src={ImageHalf} alt="" />
      </div>
      <div className="Home_image_content">
        <div className="Home_image_content_heading heading-1 heading-1--white">
          Jewellery That Excites You
        </div>
      </div>
    </section>
  );
};

export default HomeImage;
