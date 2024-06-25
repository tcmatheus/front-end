import { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/Dashboard/SidebarComponent";
import Navbar from "../components/Dashboard/navbar";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboardContainer">
      <SidebarComponent
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className={`dashboardContent ${isSidebarOpen ? "open" : "closed"}`}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
