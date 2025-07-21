import OverviewBarCharts from "@/components/dashboard/overview-bar-charts";
import OverviewCards from "@/components/dashboard/overview-cards";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <OverviewCards />
      <OverviewBarCharts />
    </div>
  )
}
