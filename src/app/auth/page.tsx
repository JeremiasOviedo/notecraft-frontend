"use client";
import React from "react";
import {NavBar, Footer, RegistrationForm } from "../../components";


const Auth: React.FC = () => {
  return (
      <main className="w-100 h-100 relative  m-0 scroll-smooth snap-y">

        <div
          className="flex flex-col w-full h-full bg-cover bg-center m-0 pr-0 justify-between items-center"
          style={{ backgroundImage: "url(background.jpg)" }}>

            <NavBar/>
            <RegistrationForm/>
            <Footer/>
        </div>
      </main>
  );
};

export default Auth;
