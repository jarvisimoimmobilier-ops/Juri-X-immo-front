import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from '/public/logo.png';
import SideBarOption from "./SideBarItem";
import { SiBrandfolder } from "react-icons/si";
import { FaArrowCircleLeft } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TbMessageChatbot } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import WordCountProgress from "./WordCountProgress";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.querySelector("body").classList.toggle("sidebar-expanded", hovered || sidebarOpen);
  }, [hovered, sidebarOpen]);

  const sidebarExpanded = hovered || sidebarOpen;

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`flex flex-col justify-between absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto 
          lg:translate-x-0 h-screen overflow-y-clip lg:overflow-y-clip  overflow-x-clip
          no-scrollbar bg-[#223E66] transition-all duration-200 
          ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-72"}
           ${sidebarExpanded ? "w-60" : "w-20"}`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between p-4">
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <FaArrowCircleLeft color="white" size={20} />
          </button>

          <NavLink end to="/" >
            <div className={`flex w-full  h-16 items-center justify-center
           transition-all duration-200 ${sidebarExpanded ? 'p-0' : 'ml-[3px]'}`}>
              <img className="w-[3rem] h-[3rem] object-contain" src={logo} alt="logo" />
            </div>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8 mt-4 flex-1">
          <ul>
            <SideBarOption
              path="/avatars"
              label="Avatars"
              icon={TbMessageChatbot}
              sidebarExpanded={sidebarExpanded}
              pathname={pathname}
            />
            <SideBarOption
              path="/profile"
              label="Profile"
              icon={CgProfile}
              sidebarExpanded={sidebarExpanded}
              pathname={pathname}
            />
            <SideBarOption
              path="/payout"
              label="Payout"
              icon={TbMoneybag}
              sidebarExpanded={sidebarExpanded}
              pathname={pathname}
            />
          </ul>
        </div>

        {/* WordCountProgress at the bottom */}
        <div className="p-4">
          <WordCountProgress sidebarExpanded={sidebarExpanded} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
