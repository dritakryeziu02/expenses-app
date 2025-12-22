import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateTransactionDialog from "@/components/shared/transactions/CreateTransactionDialog";
import TransactionsTable from "@/components/shared/transactions/TransactionsTable";

const TransactionsPage = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchTransactions = async () => {
    const res = await fetch("http://localhost:8096/api/transactions", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setTransactions(data);
  };

  const fetchCategories = async () => {
    const res = await fetch("http://localhost:8096/api/categories", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!res.ok) {
      console.error("Failed to fetch categories:", res.status);
      setCategories([]);
      return;
    }
    const data = await res.json();
    setCategories(Array.isArray(data) ? data : []);
  };

  const deleteTransaction = async (id) => {
    await fetch(`http://localhost:8096/api/transactions/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    fetchTransactions();
  };

  useEffect(() => {
    fetchTransactions();
    fetchCategories();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Transactions</h1>

        <div className="flex gap-2">
          <CreateTransactionDialog
            categories={categories}
            onCreated={fetchTransactions}
          />

          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Go to Dashboard
          </button>
        </div>
      </div>

      <TransactionsTable
        transactions={transactions}
        categories={categories}
        onDelete={deleteTransaction}
        onUpdated={fetchTransactions}
      />
    </div>
  );
};

export default TransactionsPage;
