import React from 'react';
import logo from '../../assets/Container.png';
import Home from '../../assets/line-md_home-twotone.png';
import call from '../../assets/Vector.png';
import icon from '../../assets/Icon.png';
import settings from '../../assets/Icons.png';
import { NavLink } from 'react-router';
import logout from '../../assets/streamline-flex_logout-1-remix.png'

const Sidebar = () => {
  const baseItem =
    "flex items-center gap-3 px-5 py-3  rounded-full text-sm text-gray-300  ";

  const activeItem =
  " text-white border border-white rounded-full shadow-2xl bg-[#111B3C]   shadow-white ";


  return (
    <div className="bg-[#111B3C] h-full  flex flex-col shadow-blue-50">
      <div className="flex justify-center py-6 ">
        <img className="w-10" src={logo} alt="logo" />
      </div>
      <nav className="flex-1 space-y-1">
        <NavLink to="/"
          className={({ isActive }) =>
            `${baseItem} ${isActive ? activeItem : ""}`
          }>
          <img className="w-5" src={Home} alt="" />
          Dashboard Overview
        </NavLink>

        <NavLink
          to="/calllogs"
          className={({ isActive }) =>
            `${baseItem} ${isActive ? activeItem : ""}`
          }
        >
          <img className="w-5" src={call} alt="" />
          Call Logs
        </NavLink>

        <NavLink
          to="/appoinments"
          className={({ isActive }) =>
            `${baseItem} ${isActive ? activeItem : ""}`
          }
        >
          <img className="w-5" src={icon} alt="" />
          Appointments
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${baseItem} ${isActive ? activeItem : ""}`
          }
        >
          <img className="w-5" src={settings} alt="" />
          Settings
        </NavLink>
      </nav>

  
      <div className="">
        <button className="flex items-center gap-3 px-6 py-3 mx-3 w-[calc(100%-1.5rem)] rounded-lg text-sm text-red-600 hover:bg-red-500/10 transition">
         <img className='w-8 h-8' src={logout} alt="" />
          Log Out
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
