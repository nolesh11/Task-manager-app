import { NavLink } from "react-router-dom";
import {
  ChartColumn,
  // ChevronRight,
  Kanban,
  LayoutDashboard,
  ListTodo,
  PocketKnife,
  Settings,
} from "lucide-react";
import { SidebarNavLink } from "./features/SidebarNavLink";

export function Sidebar() {
  return (
    <div className="[grid-area:sidebar] p-8">
      <div className="flex gap-4">
        <div className="bg-[#396FC8] p-2 rounded-md">
          <PocketKnife color="#fff"/>
        </div>
        <h2 className="self-center">Task manager app</h2>
      </div>
      <div className="flex flex-col">
        <SidebarNavLink path='/' title="Dashboard" icon={LayoutDashboard}/>
        {/* <div className="flex">
          
          <NavLink to="/">Dashboard</NavLink>
          <div>
            <ChevronRight />
          </div>
        </div> */}
        <div className="flex">
          <ListTodo />
          <NavLink to="/projects">Projects</NavLink>
        </div>
        <div className="flex">
          <Kanban />
          <NavLink to="/board">Board</NavLink>
        </div>
        <div className="flex">
          <ChartColumn />
          <NavLink to="/analytics">Analytics</NavLink>
        </div>
        <div className="flex">
          <Settings />
          <NavLink to="/settings">Settings</NavLink>
        </div>
      </div>
    </div>
  );
}
