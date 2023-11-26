"use client";
import React, { ReactNode, useState } from "react";

interface TechnologyCardProps {
  icon: ReactNode;
  text: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ icon, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className ='flex flex-col justify-center items-center'>
    <div
      className={`border-8 rounded-2xl border-white w-48 h-48  hover:border-[#3C6997] p-6 flex text-white ${
        isHovered ? 'animate-pulse' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     {icon}
   
    </div>
    <div
        className={` bg-transparent p-6 opacity-0 transition-opacity font-mono font-bold text-[#3C6997] text-[26px] ${
          isHovered ? 'opacity-100 animate-pulse' : ''
        }`}
      >
        <p className="m-0">{text}</p>
      </div>
    </div>

  );
};

export default TechnologyCard;
