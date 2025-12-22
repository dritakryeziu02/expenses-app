import Layout from "../dashboard/Layout";
import Header from "@/components/shared/dashboard/Header";
import Stats from "@/components/shared/dashboard/Stats";
import ChartCard from "@/components/shared/dashboard/ChartCard";
import RecentEntriesTable from "@/components/shared/dashboard/RecentEntriesTable";

const DashboardPage = () => {
  return (
    <Layout>
      <Header
        title="Dashboard"
        subtitle="Here you can see all main stats, chart, and recent entries."
      />

      
      <Stats />

      
      <ChartCard />

      
      <RecentEntriesTable />
    </Layout>
  );
};

export default DashboardPage;
