import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import NotificationMenu from "./notification-menu"
import Logo from "./logo"
import UserMenu from "./user-menu"

export default function TopHeader() {
  return (
    <header className="border-b px-4 md:px-6 sticky w-full">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div>
         <h2 className="text-2xl">Welcome, User Name</h2>
         <p className="text-sm">Have a nice day!</p>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {/* Notification */}
            <NotificationMenu />
          </div>
          {/* User menu */}
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
