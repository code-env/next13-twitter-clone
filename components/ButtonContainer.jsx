import React from "react";

const ButtonContainer = ({ label, type, className }) => {
  return (
    <button type={type} className={className}>
      {label}
    </button>
  );
};

export default ButtonContainer;
