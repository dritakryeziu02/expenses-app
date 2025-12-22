import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, List, Folder, User } from "lucide-react";

const Sidebar = () => {
  const path = useLocation().pathname;
  const user = JSON.parse(localStorage.getItem("user"));

  const LinkItem = ({ to, label, icon, path }) => {
    const isActive = path === to;
    return (
      <li>
        <Link
          to={to}
          className={`flex items-center gap-2 p-2 rounded-md ${
            isActive
              ? "bg-blue-500 text-white"
              : "text-gray-700 dark:text-white"
          }`}
        >
          {icon}
          {label}
        </Link>
      </li>
    );
  };

  return (
    <div className="w-64 h-screen bg-white dark:bg-[#1a1a1a] p-5 fixed">
      <h2 className="text-2xl font-bold mb-8 dark:text-white">Expenses App</h2>

      <ul className="space-y-3">
        <LinkItem
          to="/dashboard"
          label="Dashboard"
          icon={<LayoutDashboard />}
          path={path}
        />
        <LinkItem
          to="/transactions"
          label="Transactions"
          icon={<List />}
          path={path}
        />

        {user?.role === "admin" && (
          <LinkItem
            to="/categories"
            label="Categories"
            icon={<Folder />}
            path={path}
          />
        )}

        <LinkItem to="/profile" label="Profile" icon={<User />} path={path} />
      </ul>
    </div>
  );
};

export default Sidebar;
