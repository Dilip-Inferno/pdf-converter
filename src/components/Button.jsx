import React from "react";

const Button = (props) => {
  return (
    <div
      className={`btn ${
        props.isConvert
          ? "btn-primary"
          : // : props.isError
            // ? "btn-danger"
            "btn-success"
      }`}
    >
      {props.btnName}
    </div>
  );
};

export default Button;
