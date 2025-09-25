import React from "react";

const Button = ({ btnName, isConvert, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn ${isConvert ? "btn-primary" : "btn-success"}`}
    >
      {btnName}
    </button>
  );
};

export default Button;
