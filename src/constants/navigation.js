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
  Globe,
  Heart,
  ContactRoundIcon,
  List,
  Wallet,
  Settings,
  ClipboardList,
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
  {
    name: "All Transactions",
    path: "/admin/all-transactions",
    icon: List,
  },
  {
    name: "My Transactions",
    path: "/admin/my-transactions",
    icon: Wallet,
  },
  { name: "Dues", path: "/admin/dues", icon: ClipboardList },
  { name: "My Dues", path: "/admin/my-dues", icon: ClipboardList },
  { name: "All Members", path: "/admin/all-members", icon: Users },
  {
    name: "Members Application",
    path: "/admin/members-application",
    icon: FileText,
  },
  { name: "Chapters", path: "/admin/chapters", icon: Globe },
  { name: "Settings", path: "/admin/settings", icon: Settings },
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
  {
    name: "My Transactions",
    path: "/user/my-transactions",
    icon: Wallet,
  },
  { name: "My Dues", path: "/user/my-dues", icon: ClipboardList },
];

export const USER_BOTTOM_LINKS = [
  { name: "Account", path: "/user/my-profile", icon: User },
  { name: "Log out", path: "/logout", icon: LogOutIcon },
];

export const PUBLIC_LINKS = [
  { name: "Home", path: "/", icon: Home },
  {
    name: "About",
    path: "/about",
    icon: Info,
    hasDropdown: true,
    children: [
      { name: "About Us", path: "/about" },
      { name: "Leadership", path: "/leadership" },
    ],
  },
  {
    name: "Initiatives",
    path: "/platforms",
    icon: Grid,
    hasDropdown: true,
    children: [
      { name: "Platforms & Initiatives", path: "/platforms" },
      { name: "Events & Conferences", path: "/events", isExternal: true },
    ],
  },
  {
    name: "Resources",
    path: "/resources",
    icon: FileText,
    hasDropdown: true,
    children: [
      { name: "Resources & Media", path: "/resources" },
      { name: "Publications", path: "/publications" },
      { name: "Gallery", path: "/gallery" },
    ],
  },
  {
    name: "Community",
    path: "/get-involved",
    icon: UserPlus,
    hasDropdown: true,
    children: [
      { name: "Donation", path: "/donation", icon: Heart },
      { name: "Get Involved", path: "/get-involved" },
      { name: "Membership Policy", path: "/membership-policy" },
      { name: "Membership Agreement", path: "/membership-agreement" },
      { name: "Search Members", path: "/search" },
      { name: "Chapters", path: "/chapters" },
      { name: "Contact Us", path: "/contact-us" },
    ],
  },
];
