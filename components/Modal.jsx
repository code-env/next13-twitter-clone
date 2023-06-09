"use client";

import { closeModal } from "@redux/slice/modalSlice";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({ children }) => {
  const { type } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };

  const header = () => {
    if (type === "register") return "Create your account";
    if (type === "login") return "Login to your account";
    if (type === "profileedit") return "Edit Your profile";
  };

  console.log(header());

  return (
    <div className="modal__container">
      <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
        <div
          className="
            h-full
            lg:h-auto
            border-0 
            rounded-lg 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            bg-white
            outline-none 
            focus:outline-none
            "
        >
          <div
            className="
              flex 
              items-center 
              justify-between 
              p-10 
              rounded-t
              "
          >
            <h3 className="text-3xl font-semibold text-black">{header()}</h3>
            <button
              className="
                  p-1 
                  ml-auto
                  border-0 
                  text-black
                  hover:opacity-70
                  transition 
                "
              onClick={handleClose}
            >
              <AiOutlineClose size={20} />
            </button>
          </div>
          <div className="relative p-10 flex-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
