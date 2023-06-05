"use client";

import { useState } from "react";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";

const InputContainer = ({ type, placeholder, email, password, username }) => {
  const [inputType, setInputType] = useState("password");

  const handleOnClick = () => {
    if (inputType === "text") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };
  return (
    <div className="input__container border flex px-4 rounded items-center">
      <input
        type={password ? inputType : type}
        placeholder={placeholder}
        className="h-[40px] flex-1"
      />
      {email && <HiAtSymbol size={20} />}
      {password && (
        <HiFingerPrint
          size={20}
          className="cursor-pointer"
          onClick={handleOnClick}
        />
      )}
      {username && <HiOutlineUser size={20} />}
    </div>
  );
};

export default InputContainer;
