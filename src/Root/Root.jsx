import React from "react";
import { Outlet } from "react-router";
import { NavLink } from 'react-router';
import { IoMdNotificationsOutline } from "react-icons/io";
import Home from '../../src/assets/line-md_home-twotone.png';
import call from '../../src/assets/Vector.png';
import icon from '../../src/assets/Icon.png';
import settings from '../../src/assets/Icons.png';
import logo from '../../src/assets/Container.png';

import logout from '../../src/assets/streamline-flex_logout-1-remix.png'

export default function Root() {
     const baseItem =
    "flex items-center gap-3 px-5 py-3  rounded-full text-sm text-gray-300  ";

  const activeItem =
  " text-white border border-white rounded-full shadow-2xl bg-[#111B3C]   shadow-white ";


  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar flex flex-wrap justify-between w-full text-white bg-[#111B3C]">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square lg:w-60 md:w-50 lg:text-lg w-40 btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <p>Dashboard Overview</p>
            </label>
            <div className="flex items-center lg:gap-6">
              <div className="">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle "
                >
                  <div className="indicator ">
                    <IoMdNotificationsOutline className="w-7 h-7" />
                  </div>
                </div>
              </div>
              <div className="lg:w-10 md:w-10 w-10 mr-8">
                <img
                  className="rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </nav>
          {/* Page content here */}
          <div className="bg-bg-[#111B3C] min-h-screen border-1 border-l-gray-700 border-t-blue-950">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible text-white bg-[#111B3C]">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-center lg:mt-4 md:mt-4 mt-2 bg-[#111B3C] w-64 ">
            {/* Sidebar content here */}
          <div className="flex justify-center py-6 ">
                <img className="w-10" src={logo} alt="logo" />
              </div>
            <ul className="menu w-full grow  ">
              {/* List item */}
           
                 <li>
              <NavLink to="/"
                        className={({ isActive }) =>
                          `${baseItem} ${isActive ? activeItem : ""}`
                        }>
                        <img className="w-5" src={Home} alt="" />
                        Dashboard Overview
                      </NavLink>
              </li>

              {/* List item */}
              <li>
              <NavLink
                       to="/calllogs"
                       className={({ isActive }) =>
                         `${baseItem} ${isActive ? activeItem : ""}`
                       }
                     >
                       <img className="w-5" src={call} alt="" />
                       Call Logs
                     </NavLink>
              </li>
              <li>
                <NavLink
                       to="/appoinments"
                       className={({ isActive }) =>
                         `${baseItem} ${isActive ? activeItem : ""}`
                       }
                     >
                       <img className="w-5" src={icon} alt="" />
                       Appointments
                     </NavLink>
              </li>
              <li>
               <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                          `${baseItem} ${isActive ? activeItem : ""}`
                        }
                      >
                        <img className="w-5" src={settings} alt="" />
                        Settings
                      </NavLink>
              </li>
              
             
              
             
            </ul>
    <div className="w-full px-4 pb-6">
              <button className="flex items-center gap-3 w-full px-4 py-3 rounded-full ">
                <img className="w-6 h-6" src={logout} alt="" />
                <span className="text-red-600">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}