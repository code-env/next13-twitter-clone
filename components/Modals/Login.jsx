"use client";

import { ButtonContainer, InputContainer } from "@components";
import { openModal } from "@redux/slice/modalSlice";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    try {
      signIn("credentials", {
        email,
        password,
      });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  });

  const toggleModal = () => {
    if (isLoading) {
      return;
    }
    dispatch(openModal("register"));
  };

  const { email, password } = userData;

  const handleOnChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
        label={isLoading ? "Signing in..." : "Sign In"}
        fullWidth
        disabled={isLoading}
        secondary
      />

      <div className="text-neutral-400 text-center mt-4">
        <p>
          New on Twitter?{" "}
          <span
            onClick={toggleModal}
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
