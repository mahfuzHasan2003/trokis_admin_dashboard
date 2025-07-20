import { Montserrat } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/side-bar";
import TopHeader from "@/components/top-header";
import { SidebarProvider } from "@/components/ui/sidebar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "TROKIS Admin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <SidebarProvider>
          <SideBar />
          <div className="w-full">
            <TopHeader />
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
