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
  Shield,
} from "lucide-react";

export const ADMIN_LINKS = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    roles: ["admin", "manager", "representative"],
  },
  {
    name: "UPAM Calender",
    path: "/dashboard/calendar",
    icon: Calendar,
    roles: ["admin", "manager", "representative"],
  },
  {
    name: "Emergency Contact",
    path: "/dashboard/emergency-contact",
    icon: AlertCircle,
    roles: ["admin", "manager", "representative"],
  },
  {
    name: "Notifications",
    path: "/dashboard/notification",
    icon: Bell,
    roles: ["admin", "manager", "representative"],
  },
  {
    name: "Create User",
    path: "/dashboard/create-user",
    icon: UserPlus,
    roles: ["admin", "representative"],
  },
  {
    name: "Chapter Members",
    path: "/dashboard/chapter-members",
    icon: Users,
    roles: ["representative"],
  },
  {
    name: "My Transactions",
    path: "/dashboard/my-transactions",
    icon: Wallet,
    roles: ["admin", "manager", "representative"],
  },
  {
    name: "My Dues",
    path: "/dashboard/my-dues",
    icon: ClipboardList,
    roles: ["admin", "manager", "representative"],
  },
  {
    name: "Member Verification",
    path: "/dashboard/member-verification",
    icon: CheckCircle,
    roles: ["admin", "manager", "representative"],
  },
  {
    name: "Membership Payment",
    path: "/dashboard/membership-payment",
    icon: CreditCard,
    roles: ["admin", "representative", "manager"],
  },
  {
    name: "Support & Help",
    path: "/dashboard/support",
    icon: Headphones,
    roles: ["admin", "manager", "representative"],
  },
  {
    name: "All Transactions",
    path: "/dashboard/all-transactions",
    icon: List,
    roles: ["admin", "manager"],
  },
  {
    name: "Dues",
    path: "/dashboard/dues",
    icon: ClipboardList,
    roles: ["admin", "manager"],
  },
  {
    name: "All Members",
    path: "/dashboard/all-members",
    icon: Users,
    roles: ["admin", "manager"],
  },
  {
    name: "Role Management",
    path: "/dashboard/role-management",
    icon: Shield,
    roles: ["admin"],
  },
  {
    name: "Members Application",
    path: "/dashboard/members-application",
    icon: FileText,
    roles: ["admin", "manager"],
  },
  {
    name: "Chapters",
    path: "/dashboard/chapters",
    icon: Globe,
    roles: ["admin", "manager"],
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
    roles: ["admin"],
  },
];

export const ADMIN_BOTTOM_LINKS = [
  { name: "Account", path: "/dashboard/my-profile", icon: User },
  { name: "Log out", path: "/logout", icon: LogOutIcon },
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
