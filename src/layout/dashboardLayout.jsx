import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/Dashboard/SidebarComponent";
import Navbar from "../components/Dashboard/navbar";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const savedState = localStorage.getItem("isSidebarOpen");
    return savedState !== null ? JSON.parse(savedState) : true;
  });

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("isSidebarOpen", JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

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
