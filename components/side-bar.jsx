import Link from "next/link";
import { Button } from "./ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "./ui/sidebar";
import Image from "next/image";
import { menuItems } from "@/constants";

export default function SideBar() {
  return (
   <Sidebar>
      <SidebarHeader>
         <Link href={"/dashboard"}>
            <Image src={"/brand-logo.png"} width={200} height={50} className="mx-auto" alt="Brand logo" />
         </Link>
      </SidebarHeader>

      <SidebarContent className={"mt-2"}>
         <SidebarGroup>
            <SidebarMenu>
               {menuItems.map((menu) => (
                  <SidebarMenuItem key={menu.title}>
                     <SidebarMenuButton asChild>
                        <a href={menu.url}>
                           <menu.icon />
                           <span>{menu.title}</span>
                        </a>
                     </SidebarMenuButton>
                  </SidebarMenuItem>
               ))}
            </SidebarMenu>
         </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
         <Button variant={"destructive"}>Log Out</Button>
      </SidebarFooter>
   </Sidebar>
  )
}
