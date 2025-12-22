import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8096/api/admin/stats", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(setStats);
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 bg-white shadow rounded">Users: {stats.users}</div>
        <div className="p-4 bg-white shadow rounded">
          Transactions: {stats.transactions}
        </div>
        <div className="p-4 bg-green-100 rounded">Income: €{stats.income}</div>
        <div className="p-4 bg-red-100 rounded">Expense: €{stats.expense}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
