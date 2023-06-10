"use client";

import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { sidebarRoutes } from "@constants";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const pathname = usePathname();
  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className={`w-[20%]  min-h-screen py-4`}>
      <div className="flex flex-col gap-8 sticky top-4">
        <div className="icon h-[50px] transition-all w-[50px] rounded-full flex items-center justify-center hover:bg-gray-200/30 cursor-pointer">
          <FaTwitter className="text-3xl text-[#1EA1F2]" />
        </div>
        <ul className="sidebar__routes">
          {sidebarRoutes.map((route, index) => (
            <Link href={route.path} key={index}>
              <li
                className={`${
                  pathname === route.path && "bg-gray-200/90"
                } route`}
              >
                <route.icon className="text-2xl" />
                <span className="hidden lg:block ">{route.name}</span>
              </li>
            </Link>
          ))}
          <li className="cursor-pointer" onClick={handleSignOut}>
            signOut
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
