import Link from "next/link";
import { Button } from "./ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import Image from "next/image";
import { menuItems } from "@/constants";

export default function SideBar() {
  return (
   <Sidebar>
      <SidebarHeader>
         <Link href={"/dashboard"}>
            <Image src={"/brand-logo.png"} width={200} height={50} alt="Brand logo" />
         </Link>
      </SidebarHeader>

      <SidebarContent className={"mt-2"}>
         <SidebarGroup>
            <SidebarMenu>
               {menuItems.map((menu) => (
                  <SidebarMenuItem key={menu.title}>
                     <SidebarMenuButton asChild>
                        <Link href={menu.url} className="text-xl">
                           <menu.icon />
                           <span>{menu.title}</span>
                        </Link>
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
