"use client";

import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { sidebarRoutes } from "@constants";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const pathname = usePathname();
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={`w-[20%]  min-h-screen py-4 theme-${theme} bg-skin-fill transition-all duration-300`}
    >
      <div className="flex flex-col gap-8 sticky top-4">
        <div className="icon h-[50px] transition-all w-[50px] rounded-full flex items-center justify-center hover:bg-gray-200/30 cursor-pointer">
          <FaTwitter className="text-3xl text-[#1EA1F2]" />
        </div>
        <ul className="sidebar__routes">
          {sidebarRoutes.map((route, index) => (
            <Link href={route.path} key={index}>
              <li
                className={`${
                  pathname === route.path && "bg-gray-200/30"
                } route`}
              >
                <route.icon className="text-2xl" />
                <span className="hidden lg:block ">{route.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
