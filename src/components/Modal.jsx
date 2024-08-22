import React from "react";
import thankYouIcon from "../assets/images/thank-you.svg";
import CancelIcon from "@mui/icons-material/Cancel";
import "../css/modal.css";

function Modal({ onClose, result }) {
  return (
    <div className="modal-wrapper" aria-modal="true" role="dialog">
      <div className="modal-container">
        <div className="modal-icon-wrapper">
          <img
            src={thankYouIcon}
            alt="Illustration of a thank you message"
            className="modal-img"
          />
        </div>
        <span className="result">{`You selected ${result} out of 5`}</span>
        <h2 className="title">Thank You</h2>
        <p className="parag">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <button
          type="button"
          className="modal-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <CancelIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}
export default Modal;
