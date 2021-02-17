import React from "react";
import defaultImg from "../images/BlackGirl_Comp.jpg";

export default function SignUp({ image }) {
  const checkImage = image ? image : defaultImg;
  return (
    <section className="sign_up">
      <div className="sign_up__image">
        <img src={checkImage} alt="Girl wearing Jewellery" />
      </div>
      <div className="sign_up__content m-Container">
        <div className="sign_up_heading heading-3 heading-3--white">
          Sign Up for our newsletter to receive offers.
        </div>
        <form action="" className=" mt-m sign_up_form">
          <input type="email" placeholder="Email Address" />
          <button className="sign_up_btn btn--white btn">Sign Up</button>
        </form>
      </div>
    </section>
  );
}
