import { useLocation } from "react-router-dom"
import { navItems } from "./config/nav"

export function Header() {
  const location = useLocation();
  const currentItem = navItems.find((title) => title.path === location.pathname)
  return (
    <div className="[grid-area:header]">
      <h2>{currentItem?.title}</h2>
    </div>
  )
}