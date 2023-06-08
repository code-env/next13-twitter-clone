"use client";

import React, { useState } from "react";
import { InputContainer, ButtonContainer } from "@components";

const Password = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

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
          disabled={isLoading}
        />
        <InputContainer
          password
          type="password"
          placeholder="New password"
          name="newPassword"
          value={newPassword}
          onChange={handleChange}
          disabled={isLoading}
        />
        <ButtonContainer
          label="update"
          fullWidth
          disabled={isLoading}
          secondary
        />
      </form>
    </div>
  );
};

export default Password;
