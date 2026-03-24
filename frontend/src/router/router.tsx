import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { AppLayout } from "../layouts/AppLayout";
import { DashboardPage } from "../pages/DashboardPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { BoardPage } from "../pages/BoardPage";
import { AnalyticsPage } from "../pages/AnalyticsPage";
import { SettingsPage } from "../pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "board",
        element: <BoardPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
