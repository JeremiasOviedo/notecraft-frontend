import React from "react";
import { DashboardSidebar } from "@/components";



const Dashboard: React.FC = () => {
  return (
    <main className="w-full h-screen relative  m-0 overflow-hidden scroll-smooth snap-y">
      <div
        className="flex flex-col w-full h-full bg-cover bg-center m-0 pr-0"
      
      >
        <DashboardSidebar/>

        <div></div>
      </div>
    </main>
  );
};

export default Dashboard;
