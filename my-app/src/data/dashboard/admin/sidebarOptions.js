import {
  LayoutDashboard,
  BarChart3,
  Users,
  Store,
  Settings,
} from "lucide-react";

const sidebarOptions = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
    link: '/admin/dashboard',
  },
  {
    name: 'Analytics',
    icon: BarChart3,
    link: '/admin/analytics',
  },
  {
    name: 'Users',
    icon: Users,
    link: '/admin/users',
  },
  {
    name: 'Stores',
    icon: Store,
    link: '/admin/stores',
  },
  {
    name: 'Settings',
    icon: Settings,
    link: '/admin/settings',
  },
];

export default sidebarOptions;
