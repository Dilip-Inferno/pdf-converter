import React, { useState } from "react";
import { FaPrint } from "react-icons/fa";

const Button = ({ btnName, isConvert, onClick }) => {
  const [isPrintHover, setPrintHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setPrintHover(true)}
      onMouseLeave={() => setPrintHover(false)}
      style={{ border: "1px solid black", borderRadius: 1 } }
      className={`btn ${
        isConvert ? "btn-outline-secondary" : "btn-outline-dark"
      }`}
    >
      {isConvert && isPrintHover ? btnName : isConvert ? <FaPrint /> : btnName}
    </button>
  );
};

export default Button;
