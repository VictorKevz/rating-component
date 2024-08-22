import React from "react";
import iconStar from "../assets/images/icon-star.svg";
import "../css/header.css"

function Header() {
  return (
    <header className="header-container">
      <div className= "icon-star-wrapper">
        <img src={iconStar} alt="Icon of an orange star" className="icon-star" />
      </div>
      <h1 className="title">How did we do?</h1>
      <p className="parag">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </header>
  );
}
export default Header;
