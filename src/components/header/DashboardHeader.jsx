import React, { Children, useState } from 'react';
import { IoLogOut } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';


function DashboardHeader({
  sidebarOpen,
  setSidebarOpen,
  pageTitle,
  children
}) {

  const navigate = useNavigate()
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const logOut = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <header className="sticky top-0 bg-white border-b w-full border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">

          {/* Header: Left side */}
          <div className="flex ">

            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            <p className='ml-3'>
              {pageTitle}
            </p>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3 ">
            {children}
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            {/* <UserMenu align="right" /> */}

            <div onClick={logOut} className='cursor-pointer  p-2 flex '>Log Out <span className='p-1'><IoLogOut color="#223E66" size={20} /></span> 
            </div>


          </div>

        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;