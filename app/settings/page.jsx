"use client";

import { ButtonContainer, CustomizeImage, InputContainer } from "@components";
import { useState } from "react";
import { BiImage } from "react-icons/bi";

const Settings = () => {
  const [file, setFile] = useState(null);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="user__data w-full h-full  justify-center flex">
      <form
        className="flex flex-col gap-4 w-[70%]  transition-all"
        onSubmit={handleUpdateUser}
      >
        <label
          htmlFor="profile"
          className="cursor-pointer  w-fit mx-auto rounded-full group relative"
        >
          <CustomizeImage
            alt="profile picture of username"
            src={file ? URL.createObjectURL(file) : "/Images/user1.jpg"}
            width={150}
            height={150}
            className="rounded-full max-h-[150px] object-cover"
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{
              display: "none",
            }}
            id="profile"
          />
          <div className="overlay__container bottom-0 opacity-0 bg-gray-200/30 items-center flex justify-center absolute h-[75px] w-full group-hover:opacity-100 transition-all duration-300 rounded-b-full text-2xl text-white">
            <BiImage />
          </div>
        </label>
        <InputContainer type="text" placeholder="Username" username />
        <InputContainer type="email" placeholder="Email" email />
        <ButtonContainer
          type="submit"
          label="Update"
          className="flex w-full h-[40px] bg-sky-400 items-center justify-center rounded text-white disabled:bg-sky-500/25"
        />
      </form>
    </div>
  );
};

export default Settings;
