import React, { useState } from "react";
import Modal from "./Modal";

function Rating() {
  const [buttons, setButtons] = useState([1, 2, 3, 4, 5]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [isSubmitClicked, setSubmitClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const ratingTotal = buttons.length;

  function handleClick(button) {
    setSelectedButton(button);
  }

  function showModal() {
    if (selectedButton) {
      setSubmitClicked(true);
    }
  }

  function closeModal() {
    setIsModalOpen(true);

    // Reset the default state
    setSelectedButton(null);
    setSubmitClicked(false);
  }

  return (
    <>
      {isModalOpen && (
        <div className="item rating">
          <div className="rating-buttons-container">
            {buttons.map((button) => (
              <button
                className={`rating-button ${selectedButton === button ? "selected" : ""}`}
                key={button}
                onClick={() => handleClick(button)}
              >
                {button}
              </button>
            ))}
          </div>
          <button className="submit-btn" onClick={showModal}>
            SUBMIT
          </button>
          {isSubmitClicked && (
            <Modal total={ratingTotal} selected={selectedButton} onClose={closeModal} />
          )}
        </div>
      )}
    </>
  );
}

export default Rating;
