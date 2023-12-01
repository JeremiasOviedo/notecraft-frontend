import React from "react";
import { DashboardSidebar,DashboardContent } from "@/components";



const Dashboard: React.FC = () => {
  return (
    <main className="w-full h-screen relative  m-0 overflow-hidden scroll-smooth snap-y">
      <div
        className="flex w-full h-full bg-cover bg-center m-0 pr-0"
      
      >
        <DashboardSidebar/>
        <DashboardContent/>
      </div>
    </main>
  );
};

export default Dashboard;
