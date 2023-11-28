"use client";
import React, { ReactNode, useState } from "react";

interface TechnologyCardProps {
  icon: ReactNode;
  text: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ icon, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className ='flex flex-col justify-center items-center m-0'>
    <div
      className={`border-8 mt-2 rounded-2xl border-white w-28 h-28  m-0 hover:border-[#3C6997] p-2 flex text-white ${
        isHovered ? 'animate-pulse' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     {icon}
   
    </div>
    <div
        className={` hidden xl:flex bg-transparent pt-6 opacity-0 transition-opacity font-mono font-bold text-[#3C6997] text-[26px] ${
          isHovered ? 'opacity-100 animate-pulse' : ''
        }`}
      >
        <p className="m-0">{text}</p>
      </div>
    </div>

  );
};

export default TechnologyCard;
