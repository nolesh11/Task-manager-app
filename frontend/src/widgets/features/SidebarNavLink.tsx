import { ChevronRight, type LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

type NavProps = {
  path: string;
  title: string;
  icon: LucideIcon;
};

export function SidebarNavLink({ path, title, icon: Icon }: NavProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex justify-between gap-1 ${isActive ? "bg-[#3B82F6] " : "bg-transparent"}`
      }
    >
      {({ isActive }) => (
        <>
          <div className="flex">
            <Icon />
            <span>{title}</span>
          </div>
          <div>{isActive && <ChevronRight color='#fff'/>}</div>
        </>
      )}
    </NavLink>
  );
}
