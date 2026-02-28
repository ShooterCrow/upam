import {
  LayoutDashboard,
  Users,
  FileText,
  Bell,
  User,
  CheckCircle,
  CreditCard,
  AlertCircle,
  Headphones,
  Home,
  Info,
  Grid,
  Mail,
  UserPlus,
  Phone,
  HelpCircle,
  LogOutIcon,
  Calendar,
} from "lucide-react";

export const ADMIN_LINKS = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "UPAM Calender", path: "/admin/calendar", icon: Calendar },
  {
    name: "Member Verification",
    path: "/admin/member-verification",
    icon: CheckCircle,
  },
  {
    name: "Membership Payment",
    path: "/admin/membership-payment",
    icon: CreditCard,
  },
  {
    name: "Emergency Contact",
    path: "/admin/emergency-contact",
    icon: AlertCircle,
  },
  { name: "Notifications", path: "/admin/notification", icon: Bell },
  { name: "Support & Help", path: "/admin/support", icon: Headphones },
  { name: "All Members", path: "/admin/all-members", icon: Users },
  {
    name: "Members Application",
    path: "/admin/members-application",
    icon: FileText,
  },
];

export const ADMIN_BOTTOM_LINKS = [
  { name: "Account", path: "/admin/my-profile", icon: User },
  { name: "Log out", path: "/logout", icon: LogOutIcon }, // Note: Handled specially in components
];

export const USER_LINKS = [
  { name: "Dashboard", path: "/user", icon: LayoutDashboard },
  {
    name: "Member Verification",
    path: "/user/member-verification",
    icon: CheckCircle,
  },
  { name: "UPAM Calendar", path: "/user/calendar", icon: Calendar },
  {
    name: "Membership Payment",
    path: "/user/membership-payment",
    icon: CreditCard,
  },
  {
    name: "Emergency Contact",
    path: "/user/emergency-contact",
    icon: AlertCircle,
  },
  { name: "Notifications", path: "/user/notification", icon: Bell },
  { name: "Support & Help", path: "/user/support", icon: Headphones },
];

export const USER_BOTTOM_LINKS = [
  { name: "Account", path: "/user/my-profile", icon: User },
  { name: "Log out", path: "/logout", icon: LogOutIcon },
];

export const PUBLIC_LINKS = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Info },
  { name: "Leadership", path: "/leadership", icon: Users },
  { name: "Platforms & Initiatives", path: "/platforms", icon: Grid },
  { name: "Events & Conferences", path: "/events", icon: Calendar },
  {
    name: "Resources & Media",
    path: "/resources",
    icon: FileText,
    hasDropdown: true,
    children: [
      { name: "Publications", path: "/publications" },
      { name: "Gallery", path: "/gallery" },
    ],
  },
  {
    name: "Membership",
    path: "/membership",
    icon: UserPlus,
    hasDropdown: true,
    children: [
      { name: "Membership Policy", path: "/membership-policy" },
      { name: "Search Members", path: "/search" },
    ],
  },
  { name: "Get Involved", path: "/get-involved", icon: UserPlus },
  { name: "Contact Us", path: "/contact-us", icon: Mail },
];
