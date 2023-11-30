"use client";
import Button from "./Button";
import { useAuth } from "./AuthProvider";
import React from "react";

const Hero: React.FC = () => {
  const token = useAuth();

  return (
    <div className="flex flex-col  lg:flex-row-reverse lg:flex-1 2xl:px-44 justify-center items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black m-0 pt-[80px] pb-[60px] px-2 ">
      <div className="flex justify-center m-0">
        <div className="flex flex-1 2xl:w-[540px] 2xl:h-[540px] sm:w-[500px] sm:h-[500px] w-[300px] justify-center mb-10">
          <img src="hero-svg.svg" alt="notecraft"></img>
        </div>
      </div>
      <div className="flex flex-col flex-1 m-0">
        <span className="font-sans font-bold text-[20px] 2xl:text-[40px] xl:text-[40px] lg:text-[36px] sm:text-[34px] text-white text-center m-1">
          <h1>Capture ideas, shape your thoughts.</h1>
        </span>
        <span className="font-sans font-bold text-[32px] lg:text-[40px] sm:text-[36px] text-center text-white mt-2">
          <h1>Welcome to Notecraft.</h1>
        </span>
        <span className="font-sans font-bold text-[22px] text-center mt-8">
            <Button to="/auth">Get Started!</Button>
        </span>
      </div>
    </div>
  );
};

export default Hero;
