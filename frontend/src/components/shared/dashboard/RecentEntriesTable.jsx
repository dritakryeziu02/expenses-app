import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const RecentEntriesTable = () => {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Recent Entries</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2">ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>#001</td>
              <td>Food</td>
              <td className="text-green-600 font-medium">Completed</td>
              <td>€12</td>
            </tr>
            <tr className="border-b">
              <td>#002</td>
              <td>Transport</td>
              <td className="text-yellow-600 font-medium">Pending</td>
              <td>€5</td>
            </tr>
            <tr>
              <td>#003</td>
              <td>Shopping</td>
              <td className="text-red-600 font-medium">Cancelled</td>
              <td>€40</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default RecentEntriesTable;
