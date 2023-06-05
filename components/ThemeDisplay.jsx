"use client";

import { themeTypes } from "@constants";
import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@redux/slice/themeSlice";

const ThemeDisplay = () => {
  const dispatch = useDispatch();

  const userTheme = useSelector((state) => state.theme);

  const handleOnClick = (name) => {
    dispatch(toggleTheme(name));
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold font-2xl">Background</p>
      <div className="color__container flex flex-wrap justify-between gap-2">
        {themeTypes.map((theme, index) => (
          <div
            key={index}
            className={`theme h-[70px] flex-1 ${
              theme.bg ? `${theme.bg}` : "bg-[#15202b]"
            }  flex items-center text-white rounded-md cursor-pointer px-4 gap-4 ${
              userTheme === theme.name && "border-sky-500 border"
            }`}
            onClick={() => handleOnClick(theme.name)}
          >
            <div className="h-4 w-4 rounded-full flex items-center justify-center bg-sky-500">
              {userTheme === theme.name && <AiOutlineCheck size={10} />}
            </div>
            <span
              className={`font-bold ${
                theme.color ? `text-black` : "text-white"
              } mx-auto`}
            >
              {theme.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeDisplay;
