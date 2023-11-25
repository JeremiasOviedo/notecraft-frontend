import React, { ReactNode } from "react";

interface TechnologyCardProps{
    icon: ReactNode;
    text: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ icon, text}) => {
  return (
    <div className="border-8 rounded-2xl border-white w-48 h-48  hover:border-[#3C6997] fill-white p-6 flex ">
        {icon}
    </div>
  );
};

export default TechnologyCard;
