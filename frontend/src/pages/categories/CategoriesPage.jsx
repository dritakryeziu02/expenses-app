import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateCategoryDialog from "@/components/shared/categories/CreateCategoryDialog";
import CategoriesTable from "@/components/shared/categories/CategoriesTable";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const fetchCategories = async () => {
    const res = await fetch("http://localhost:8096/api/categories", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setCategories(data);
  };

  const deleteCategory = async (id) => {
    await fetch(`http://localhost:8096/api/categories/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    fetchCategories();
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const filteredCategories = categories.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = type === "all" || c.type === type;
    return matchesSearch && matchesType;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Categories</h1>

        <div className="flex gap-2">
          <CreateCategoryDialog onCreated={fetchCategories} />

          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Go to Dashboard
          </button>
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select value={type} onValueChange={setType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="income">Income</SelectItem>
            <SelectItem value="expense">Expense</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <CategoriesTable
        categories={filteredCategories}
        onDelete={deleteCategory}
        onRefresh={fetchCategories}
      />
    </div>
  );
};

export default CategoriesPage;
