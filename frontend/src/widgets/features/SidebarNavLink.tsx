import { type LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

type NavProps = {
  path: string;
  title: string;
  icon: LucideIcon;
};

export function SidebarNavLink({ path, title, icon: Icon }: NavProps) {
  return (
      <NavLink to={path} className={({ isActive }) => `flex gap-1 ${isActive ? "bg-[#3B82F6]" : "bg-transparent"}` }>
        <Icon />
        <span>{title}</span>
      </NavLink>
  );
}
