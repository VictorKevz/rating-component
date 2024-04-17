import React from "react";
import iconStar from "../assets/images/icon-star.svg";

function Header() {
  return (
    <div className="item text">
      <button className= "icon-star-container">
        <img src={iconStar} alt="star-icon" className="icon-star" />
      </button>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
}
export default Header;
