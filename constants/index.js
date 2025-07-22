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
   { id: "u101", serial: 1, name: "Alice Johnson", email: "alice.johnson@example.com", phone: "01711-111111" },
   { id: "u102", serial: 2, name: "Bob Smith", email: "bob.smith@example.com", phone: "01711-222222" },
   { id: "u103", serial: 3, name: "Charlie Ahmed", email: "charlie.ahmed@example.com", phone: "01711-333333" },
   { id: "u104", serial: 4, name: "Diana Roy", email: "diana.roy@example.com", phone: "01711-444444" },
   { id: "u105", serial: 5, name: "Ethan Das", email: "ethan.das@example.com", phone: "01711-555555" },
   { id: "u106", serial: 6, name: "Faria Noor", email: "faria.noor@example.com", phone: "01711-666666" },
   { id: "u107", serial: 7, name: "George Karim", email: "george.karim@example.com", phone: "01711-777777" },
   { id: "u108", serial: 8, name: "Hannah Begum", email: "hannah.begum@example.com", phone: "01711-888888" },
   { id: "u109", serial: 9, name: "Imran Hossain", email: "imran.hossain@example.com", phone: "01711-999999" },
   { id: "u110", serial: 10, name: "Jannat Islam", email: "jannat.islam@example.com", phone: "01711-000000" }
];


export { menuItems, users };