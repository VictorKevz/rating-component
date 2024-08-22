import React, { useState } from "react";
import inputData from "../data";
import "../css/rating.css";
import Modal from "./Modal";

function Rating() {
  const [rating, setRating] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    setRating(checked ? Number(value) : null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) {
      alert("Please choose your rating!");
    } else {
      setShowModal(true);
    }
  };
  const closeModal = () => {
    setShowModal(false);
    setRating(null);
  };
  return (
    <>
      {showModal ? (
        <Modal onClose={closeModal} result ={rating}/>
      ) : (
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="form-container">
            {inputData.map((input) => (
              <div key={input.id} className="field">
                <label
                  className={`form-label ${rating === input.value && "active"}`}
                  htmlFor={input.id}
                >
                  {input.id}
                </label>
                <input
                  type="radio"
                  name={input.name}
                  id={input.id}
                  value={input.value}
                  checked={rating === input.value}
                  onChange={handleChange}
                  className={`form-input`}
                  aria-label={`Rate ${input.value} out of 5`}
                />
              </div>
            ))}
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      )}
    </>
  );
}
export default Rating;
