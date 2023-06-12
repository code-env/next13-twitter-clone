"use client";

import { ButtonContainer, InputContainer } from "@components";
import { openModal } from "@redux/slice/modalSlice";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    username: "",
    handle: "",
  });

  const handleRegister = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password,
          handle,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
        dispatch(openModal("login"));
      } else {
        const data = await response.json();
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  });

  const toggleModal = () => {
    if (isLoading) {
      return;
    }
    dispatch(openModal("login"));
  };

  const { email, password, handle, username } = userData;

  const handleOnChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-4">
      <InputContainer
        onChange={handleOnChange}
        type="text"
        placeholder="Username"
        username
        value={username}
        name="username"
        disabled={isLoading}
      />
      <InputContainer
        onChange={handleOnChange}
        type="text"
        placeholder={`@handle. ex:@${username}`}
        username
        value={handle}
        name="handle"
        disabled={isLoading}
      />
      <InputContainer
        onChange={handleOnChange}
        type="email"
        placeholder="Email address"
        email
        value={email}
        name="email"
        disabled={isLoading}
      />

      <InputContainer
        onChange={handleOnChange}
        type="password"
        placeholder="password"
        password
        value={password}
        name="password"
        disabled={isLoading}
      />
      <ButtonContainer
        label={isLoading ? "Creating..." : "Sign In"}
        fullWidth
        disabled={isLoading}
        secondary
      />

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
