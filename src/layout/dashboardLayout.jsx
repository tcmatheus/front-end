import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/Dashboard/SidebarComponent";
import Navbar from "../components/Dashboard/navbar";

export default function DashboardLayout() {
  return (
    <div className="dashboardContainer">
      <SidebarComponent />
      <div className="dashboardContent">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
