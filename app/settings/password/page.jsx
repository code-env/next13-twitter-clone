"use client";

import React, { useState } from "react";
import { InputContainer, ButtonContainer } from "@components";

const Password = () => {
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
  };

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const { currentPassword, newPassword } = passwords;

  const handleChange = (e) => {
    setPasswords((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
          onChange={handleChange}
          name="currentPassword"
          value={currentPassword}
        />
        <InputContainer
          password
          type="password"
          placeholder="New password"
          name="newPassword"
          value={newPassword}
          onChange={handleChange}
        />
        <ButtonContainer label="update" fullWidth />
      </form>
    </div>
  );
};

export default Password;
