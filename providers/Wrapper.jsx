"use client";

import { useSelector } from "react-redux";
import { Login, Modal, ProfileEdit, Register } from "@components";

const Wrapper = ({ children }) => {
  const { default: initialState, type } = useSelector((state) => state.modal);

  return (
    <main className="relative">
      {children}
      {initialState && (
        <Modal>
          {type.toString() === "login" && <Login />}
          {type === "register" && <Register />}
          {type === "profileedit" && <ProfileEdit />}
        </Modal>
      )}
    </main>
  );
};

export default Wrapper;
