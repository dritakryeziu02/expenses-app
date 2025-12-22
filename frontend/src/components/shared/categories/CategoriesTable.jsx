import { Button } from "@/components/ui/button";
import EditCategoryDialog from "./EditCategoryDialog";

const CategoriesTable = ({ categories, onDelete, onRefresh }) => {
  return (
    <table className="w-full mt-6 border">
      <thead>
        <tr className="bg-muted">
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Type</th>
          <th className="p-2 text-right">Actions</th>
        </tr>
      </thead>

      <tbody>
        {categories.map((c) => (
          <tr key={c.id} className="border-t">
            <td className="p-2">{c.name}</td>
            <td className="p-2 capitalize">{c.type}</td>
            <td className="p-2 flex justify-end gap-2">
              <EditCategoryDialog category={c} onUpdated={onRefresh} />

              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete(c.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoriesTable;
