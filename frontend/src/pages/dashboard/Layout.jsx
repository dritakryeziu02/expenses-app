import React from "react";
import Sidebar from "../../components/shared/sidebar/Sidebar";
import Navbar from "../../components/shared/navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 w-full">
        <Navbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
