import { Button } from "@/components/ui/button";
import EditTransactionDialog from "./EditTransactionDialog";

const TransactionsTable = ({
  transactions,
  categories,
  onDelete,
  onUpdated,
}) => {
  const getCategoryName = (id) =>
    categories.find((c) => c.id === id)?.name || "-";

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border rounded-xl">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Title</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Type</th>
            <th className="p-2">Category</th>
            <th className="p-2">Date</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-t">
              <td className="p-2">{t.title}</td>
              <td className="p-2">{t.amount} €</td>
              <td className="p-2 capitalize">{t.type}</td>
              <td className="p-2">{getCategoryName(t.category_id)}</td>
              <td className="p-2">{new Date(t.date).toLocaleDateString()}</td>
              <td className="p-2 flex gap-2">
                <EditTransactionDialog
                  transaction={t}
                  categories={categories}
                  onUpdated={onUpdated}
                />
                <Button variant="destructive" onClick={() => onDelete(t.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
