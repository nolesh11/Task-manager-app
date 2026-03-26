import {
  ChartColumn,
  Kanban,
  LayoutDashboard,
  ListTodo,
  Settings,
} from "lucide-react";

export const navItems = [
  {
    path: "/",
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/projects",
    title: "Projects",
    icon: ListTodo,
  },
  {
    path: "/board",
    title: "Board",
    icon: Kanban,
  },
  {
    path: "/analytics",
    title: "Analytics",
    icon: ChartColumn,
  },
  {
    path: "/settings",
    title: "Settings",
    icon: Settings,
  },
];
