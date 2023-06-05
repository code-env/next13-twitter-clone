"use client";

import React from "react";
import { InputContainer, ButtonContainer } from "@components";

const Password = () => {
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="user__data w-full h-full  justify-center flex">
      <form
        className="flex flex-col gap-4 w-[70%]  transition-all"
        onSubmit={handleUpdatePassword}
      >
        <InputContainer
          password
          type="password"
          placeholder="Current password"
        />
        <InputContainer password type="password" placeholder="New password" />
        <ButtonContainer
          type="submit"
          label="update"
          className="flex w-full h-[40px] bg-sky-400 items-center justify-center rounded text-white disabled:bg-sky-500/25"
        />
      </form>
    </div>
  );
};

export default Password;
