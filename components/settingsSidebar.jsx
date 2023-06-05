"use client";

import { usePathname } from "next/navigation";
import { settingsRoutes } from "@constants";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const SettingsSidebar = () => {
  const pathname = usePathname();

  return (
    <ul className="sidebar__routes list-none flex flex-col">
      {settingsRoutes.map((route, index) => (
        <Link href={route.path} key={index}>
          <li
            className={`h-[40px] w-full flex items-center justify-between px-4 transition-all hover:bg-gray-200/30 cursor-pointer ${
              route.path === pathname && "bg-gray-200/30"
            }`}
          >
            {route.name}
            <span>
              <BiChevronRight />
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SettingsSidebar;
