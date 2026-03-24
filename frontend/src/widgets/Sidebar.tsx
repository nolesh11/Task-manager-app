import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="[grid-area:sidebar] flex flex-col">
      <h2>Task manager app</h2>
      <NavLink to='/'>Dashboard</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/board'>Board</NavLink>
      <NavLink to='/analytics'>Analytics</NavLink>
      <NavLink to='/settings'>Settings</NavLink>
    </div>
  )
}