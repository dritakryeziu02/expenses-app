import { DollarSign, Users } from "lucide-react";
import StatCard from "../dashboard/StatCard";

const Stats = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-10">
      <StatCard
        label="Total Transactions"
        icon={<DollarSign size={22} />}
        stat="124"
      />
      <StatCard
        label="Monthly Revenue"
        icon={<DollarSign size={22} />}
        stat="€2,140"
      />
      <StatCard label="New Users" icon={<Users size={22} />} stat="58" />
    </div>
  );
};

export default Stats;
