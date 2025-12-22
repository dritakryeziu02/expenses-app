import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="w-full h-16 bg-white dark:bg-[#1a1a1a] shadow-sm dark:border-b dark:border-gray-800 px-6 flex justify-end items-center">
      <Button variant="outline" onClick={logout} className="dark:text-white">
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
