import React from "react";

const ButtonContainer = ({ label, type, className, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonContainer;
