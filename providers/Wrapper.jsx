"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "@redux/slice/modalSlice";
import Modal from "@components/Modal";
import { AiOutlineClose } from "react-icons/ai";

const Wrapper = ({ children }) => {
  const modal = useSelector((state) => state.modal);
  const dispact = useDispatch();

  const handleClick = () => {
    dispact(toggleModal());
  };

  return (
    <main className="relative">
      {children}
      {modal && (
        <Modal>
          <div className="modal__container">
            <AiOutlineClose onClick={handleClick} size={25} />
            this is a text
          </div>
        </Modal>
      )}
    </main>
  );
};

export default Wrapper;
