import OverviewBarCharts from "@/components/dashboard/overview-bar-charts";
import OverviewCards from "@/components/dashboard/overview-cards";
import UsersTable from "@/components/users/users-table";
import { users } from "@/constants";

export default function Dashboard() {
  return (
    <div className="space-y-8 mb-14">
      <OverviewCards />
      <OverviewBarCharts />
      <UsersTable caption="Recent Users" users={users} />
    </div>
  )
}
