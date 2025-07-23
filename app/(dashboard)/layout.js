import SideBar from "@/components/side-bar";
import TopHeader from "@/components/top-header";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata = {
  title: "TROKIS Admin Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <SideBar />
      <div className="w-full px-4 md:px-6">
        <TopHeader />
        {children}
      </div>
    </SidebarProvider>
  );
}
