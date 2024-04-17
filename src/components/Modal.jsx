import React, { useState } from "react";
import thanksIcon from "../assets/images/thank-you.svg"
import CancelIcon from '@mui/icons-material/Cancel';


function Modal(props) {

    function handleModal(){
        props.onClose();
    }
  return (
    <div className="outer-container modal">
      <div className="inner-container modal">
        <img src={thanksIcon} alt="thank-you-icon"/>
        <button className="modal-button">You selected {props.selected} out of {props.total}</button>
        <h1>Thank You!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
        <button className="close-button" onClick={handleModal}><CancelIcon fontSize="large" className="cancel-icon"/></button>
      </div>
    </div>
  );
}

export default Modal;
