"use client";

import { ButtonContainer, InputContainer } from "@components";
import { openModal } from "@redux/slice/modalSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  const saythere = () => {
    dispatch(openModal("register"));
  };

  const { email, password } = userData;

  const handleOnChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(userData);

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <InputContainer
        onChange={handleOnChange}
        type="email"
        placeholder="Email address"
        email
        value={email}
        name="email"
      />
      <InputContainer
        onChange={handleOnChange}
        type="password"
        placeholder="password"
        password
        value={password}
        name="password"
      />
      <ButtonContainer label="Sign In" fullWidth />

      <div className="text-neutral-400 text-center mt-4">
        <p>
          New on Twitter?{" "}
          <span
            onClick={saythere}
            className="
            text-gray-500 
            cursor-pointer 
            hover:underline
          "
          >
            Create an account
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
