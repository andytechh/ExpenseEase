import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Wallet, Plane, CheckCircle, Settings } from 'lucide-react';

const MainLayout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current URL

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen grid md:grid-cols-[240px_1fr]">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-700 p-6 border-r border-red-100 flex flex-col justify-between items-center h-screen transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 md:static z-50`}
      >
        {/* Close Button on Mobile */}
        <button
          className="md:hidden absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center gap-4">
          <img className='rounded-full h-30 w-30 mt-7' src="/src/assets/me.jpg" alt="Profile" />
          <h1 className='text-lg font-semibold mb-8 text-white'>{props.name}</h1>

          <nav className="w-full">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/"
                  className={`flex items-center gap-3 p-2 rounded w-40 ${
                    isActive("/") ? "transition duration-150 ease-in-out box-border size-1 border-1 p-4 text-[#2AB6A5] font-bold" : "translate-y-1 transition duration-300 ease-in-out hover:bg-[#448079] hover:box-border size-1 p-4 text-white font-semibold" 
                  }`}text-white 
                >
                  <Home size={20} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/expenses"
                  className={`flex items-center gap-3 p-2 rounded w-40 ${
                    isActive("/expenses") ?"transition duration-150 ease-in-out box-border size-1 border-1 p-4 text-[#2AB6A5] font-bold" : "translate-y-1 transition duration-300 ease-in-out hover:bg-[#448079] hover:box-border size-1 p-4 text-white font-semibold" 
                  }`}
                >
                  <Wallet size={20} />
                  Expenses
                </Link>
              </li>
              <li>
                <Link
                  to="/trips"
                  className={`flex items-center gap-3 p-2 rounded w-40 ${
                    isActive("/trips") ? "transition duration-150 ease-in-out box-border size-1 border-1 p-4 text-[#2AB6A5] font-bold" : "translate-y-1 transition duration-300 ease-in-out hover:bg-[#448079] hover:box-border size-1 p-4 text-white font-semibold" 
                  }`}
                >
                  <Plane size={20} />
                  Trips
                </Link>
              </li>
              <li>
                <Link
                  to="/approvals"
                  className={`flex items-center gap-3 p-2 rounded w-40 ${
                    isActive("/approvals") ? "transition duration-150 ease-in-out box-border size-1 border-1 p-4 text-[#2AB6A5] font-bold" : "translate-y-1 transition duration-300 ease-in-out hover:bg-[#448079] hover:box-border size-1 p-4 text-white font-semibold" 
                  }`}
                >
                  <CheckCircle size={20} />
                  Approvals
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className={`flex items-center gap-3 p-2 rounded w-40 ${
                    isActive("/settings") ? "transition duration-150 ease-in-out box-border size-1 border-1 p-4 text-[#2AB6A5] font-bold" : "translate-y-1 transition duration-300 ease-in-out hover:bg-[#448079] hover:box-border size-1 p-4 text-white font-semibold" 
                  }`}
                >
                  <Settings size={20} />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex">
          <h1 className="text-3xl font-semibold">
            <span className="text-white">Ex</span>
            <span className="text-[#2AB6A5]">penseEase</span>
          </h1>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Hamburger Button */}
        <button
          className="md:hidden p-4 bg-gray-800 text-white fixed top-4 left-4 rounded z-50"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>

        <main className="flex-1 p-8 max-w-4xl mx-auto w-full">
          <Outlet />
        </main>

        <footer className="py-4 px-8 text-center border-t">
          <p>All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
