import React from "react";
import { Link } from "react-router-dom";
import blackGirl from "../images/BlackGirl_Comp.jpg";
import { useSelector } from "react-redux";

const Menu = ({ click, handleClick }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className={`menu ${click ? "open" : "close"}`}>
      <div className={`menu__image m-hide ${click ? "open" : "close"}`}>
        <img src={blackGirl} alt="" />
      </div>

      <div className={`menu__content ${click ? "open" : "close"}`}>
        <div className="menu__close" onClick={handleClick}>
          X
        </div>
        <ul className="menu__list">
          <li className="heading-3 menu__link">
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className="heading-3 menu__link">
            <Link onClick={handleClick} to="/shop">
              Shop
            </Link>
          </li>
          <li className="heading-3 menu__link">
            <Link onClick={handleClick} to="/about">
              About
            </Link>
          </li>
          <li className="heading-3 menu__link">
            <Link onClick={handleClick} to={userInfo ? "/logout" : "/login"}>
              {userInfo ? `Logout (${userInfo.name.split(" ")[0]})` : "Login"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
