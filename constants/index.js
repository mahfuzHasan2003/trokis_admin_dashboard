import { BadgeDollarSign, ChartColumnStacked, Headset, IdCard, LayoutDashboard, Settings, UserCog, Users } from "lucide-react";


const menuItems = [
   {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
   },
   {
      title: "Users",
      url: "/users",
      icon: Users,
   },
   {
      title: "Earnings",
      url: "/earnings",
      icon: BadgeDollarSign,
   },
   {
      title: "Drivers",
      url: "/drivers",
      icon: UserCog,
   },
   {
      title: "Driver Requests",
      url: "/driver-requests",
      icon: IdCard,
   },
   {
      title: "Categories",
      url: "/categories",
      icon: ChartColumnStacked,
   },
   {
      title: "Support",
      url: "/support",
      icon: Headset,
   },
   {
      title: "Settings",
      url: "/settings",
      icon: Settings,
   },
];

const users = [
   { id: "u101", serial: 1, name: "Alice Johnson", email: "alice.johnson@example.com", userType: "user" },
   { id: "u102", serial: 2, name: "Bob Smith", email: "bob.smith@example.com", userType: "driver" },
   { id: "u103", serial: 3, name: "Charlie Ahmed", email: "charlie.ahmed@example.com", userType: "driver" },
   { id: "u104", serial: 4, name: "Diana Roy", email: "diana.roy@example.com", userType: "user" },
   { id: "u105", serial: 5, name: "Ethan Das", email: "ethan.das@example.com", userType: "driver" },
   { id: "u106", serial: 6, name: "Faria Noor", email: "faria.noor@example.com", userType: "user" },
   { id: "u107", serial: 7, name: "George Karim", email: "george.karim@example.com", userType: "user" },
   { id: "u108", serial: 8, name: "Hannah Begum", email: "hannah.begum@example.com", userType: "user" },
   { id: "u109", serial: 9, name: "Imran Hossain", email: "imran.hossain@example.com", userType: "user" },
   { id: "u110", serial: 10, name: "Jannat Islam", email: "jannat.islam@example.com", userType: "driver" }
];




export { menuItems, users };