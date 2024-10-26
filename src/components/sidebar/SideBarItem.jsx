import React from "react";
import { NavLink } from "react-router-dom";

const SideBarOption = ({ path, label, icon: Icon, sidebarExpanded, pathname }) => {
  return (
    <li className={`p-5 last:mb-0 ${pathname === path ? "bg-white " : ""}`}>
      <NavLink
        end
        to={path}
        className={`flex items-center transition duration-150 ${pathname === path ? "text-[#223E66]" : "text-white"}`}
      >
        <Icon size={24} className={`flex-shrink-0 ${sidebarExpanded ? "ml-0" :"ml-3" }`} color={`${pathname === path ? "#223E66" : "white"}`} />
        <span className={`ml-2 text-sm font-bold ${sidebarExpanded ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}>
          {label}
        </span>
      </NavLink>
    </li>
  );
};

export default SideBarOption;
