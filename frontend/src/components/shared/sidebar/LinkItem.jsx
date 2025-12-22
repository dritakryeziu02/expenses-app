const LinkItem = ({ to, label, icon, path }) => {
  const isActive = path === to;
  return (
    <li>
      <Link
        to={to}
        className={`flex items-center gap-2 p-2 rounded-md ${
          isActive ? "bg-blue-500 text-white" : "text-gray-700 dark:text-white"
        }`}
      >
        {icon}
        {label}
      </Link>
    </li>
  );
};
