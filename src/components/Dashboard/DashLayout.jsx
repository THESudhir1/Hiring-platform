import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './DashNav';

const Layout = () => {
  return (
    <div className="flex mt-16 h-screen">
      {/* Left side static menu */}
      <div className="w-1/3 bg-green-700">
        <Sidebar />
      </div>

      {/* Right side changing content */}
      <div className="w-2/3 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
