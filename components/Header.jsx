"use client";

import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Header = ({ title, arrow }) => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <div className="flex h-[60px] border-b items-center px-8 justify-between transition cursor-pointer sticky top-0 z-10 backdrop-blur-md bg-white/30">
      <div className="header__content flex items-center gap-4">
        {arrow && (
          <BiArrowBack
            className="hover:text-gray-500 transition text-2xl"
            onClick={handleClick}
          />
        )}{" "}
        <h1 className="text-2xl">{title && title}</h1>
      </div>
    </div>
  );
};

export default Header;
