import NotificationMenu from "./notification-menu"
import UserMenu from "./user-menu"

export default function TopHeader() {
  return (
    <header className="border-b sticky mb-8">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div>
         <h2 className="text-2xl">Welcome, User Name</h2>
         <p className="text-sm">Have a nice day!</p>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <NotificationMenu />
          </div>
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
