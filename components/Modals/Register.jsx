"use client";

import { ButtonContainer, InputContainer } from "@components";
import { openModal } from "@redux/slice/modalSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    username: "",
    handle: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
  };

  const toggleModal = () => {
    dispatch(openModal("login"));
  };

  const { email, password, handle, username } = userData;

  const handleOnChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(userData);

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-4">
      <InputContainer
        onChange={handleOnChange}
        type="text"
        placeholder="Username"
        username
        value={username}
        name="username"
      />
      <InputContainer
        onChange={handleOnChange}
        type="text"
        placeholder={`@handle. ex:@${username ? username : "username"}`}
        username
        value={handle}
        name="handle"
      />
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
          Not new here?{" "}
          <span
            onClick={toggleModal}
            className="
            text-gray-500 
            cursor-pointer 
            hover:underline
          "
          >
            Sign in
          </span>
        </p>
      </div>
    </form>
  );
};

export default Register;
