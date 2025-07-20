import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { RiPassPendingLine } from "react-icons/ri";
import { MdCategory } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";


const menuItems = [
   {
      title: "Dashboard",
      url: "/dashboard",
      icon: MdOutlineDashboard,
   },
   {
      title: "Users",
      url: "/users",
      icon: FiUsers,
   },
   {
      title: "Earnings",
      url: "/earnings",
      icon: RiMoneyDollarCircleLine,
   },
   {
      title: "Drivers",
      url: "/drivers",
      icon: TbSteeringWheelFilled,
   },
   {
      title: "Driver Requests",
      url: "/driver-requests",
      icon: RiPassPendingLine,
   },
   {
      title: "Categories",
      url: "/categories",
      icon: MdCategory,
   },
   {
      title: "Support",
      url: "/support",
      icon: BiSupport,
   },
   {
      title: "Settings",
      url: "/settings",
      icon: CiSettings,
   },
];

export { menuItems };