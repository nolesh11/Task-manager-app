import { Outlet } from "react-router-dom";
import { Header } from "../widgets/Header";
import { Sidebar } from "../widgets/Sidebar";

export function AppLayout() {
  return (
    <div className="grid grid-cols-[.2fr_1fr] grid-rows-[1fr_1fr] [grid-template-areas:'sidebar_header'_'sidebar_main'] bg-[#0D0E14] text-[#EEE3E6] h-screen">
      <Header />
      <Sidebar />
      <main className="[grid-area:main]">
        <Outlet />
      </main>
    </div>
  );
}
