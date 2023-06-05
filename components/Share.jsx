"use client";

import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import CustomizeImage from "./CustomizeImage";
import { BiImage } from "react-icons/bi";
import { ButtonContainer } from "@components";

const Share = () => {
  const [file, setFile] = useState(null);
  return (
    <div className="px-8 py-4 bg-skin-fill flex gap-4">
      <div className="user__profile  ">
        <CustomizeImage
          src="/Images/user1.jpg"
          height={40}
          width={40}
          alt="user profile picture"
          className="rounded-full object-cover object-top max-h-[50px]"
        />
      </div>
      <div className="share__container flex-1 flex flex-col gap-4">
        <div className="share_top border-b flex-1">
          <textarea
            placeholder="Say something..."
            className="border-none outline-none placeholder:text-gray-500 bg-transparent resize-none w-full"
          />
        </div>
        <div className="share_bottom flex flex-col gap-2">
          {file && (
            <div className="image__container flex wfull bg-red relative">
              <CustomizeImage
                src={URL.createObjectURL(file)}
                height={20}
                width={20}
                alt="new image to be uploaded"
                className="w-full max-h-[300px] object-cover rounded-3xl object-top"
              />
              <div
                className="absolute right-0 text-2xl cursor-pointer h-[30px] w-[30px] rounded-full bg-white flex items-center justify-center"
                onClick={() => setFile(null)}
              >
                <RiCloseLine className="text-rose-500" />
              </div>
            </div>
          )}
          <div className="action__container flex justify-between items-center">
            <label htmlFor="file">
              <input
                type="file"
                name=""
                id="file"
                style={{
                  display: "none",
                }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <span className="text-2xl text-[#1EA1F2] cursor-pointer">
                <BiImage />
              </span>
            </label>
            <ButtonContainer
              type="button"
              label="Tweet"
              className="h-[40px] rounded-[20px] cursor-pointer bg-[#1EA1F2] px-4 text-white border-[#1EA1F2] hover:bg-transparent border hover:text-[#1EA1F2] transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
