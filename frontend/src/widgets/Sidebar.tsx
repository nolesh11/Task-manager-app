import { PocketKnife } from "lucide-react";
import { SidebarNavLink } from "./features/SidebarNavLink";
import { navItems } from "./config/nav";

export function Sidebar() {
  return (
    <div className="[grid-area:sidebar] p-8 bg-[#101428]">
      <div className="flex gap-4">
        <div className="bg-[#396FC8] p-2 rounded-md">
          <PocketKnife color="#fff" />
        </div>
        <h2 className="self-center">Task manager app</h2>
      </div>
      <nav className="flex flex-col">
        {navItems.map((item) => (
          <SidebarNavLink
            key={item.path}
            path={item.path}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </nav>
    </div>
  );
}
