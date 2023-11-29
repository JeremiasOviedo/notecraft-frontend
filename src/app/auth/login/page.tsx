"use client";
import React from "react";
import {NavBar, Footer, LoginForm } from "../../../components";




const Login: React.FC = () => {
  return (
      <main className="w-full h-full relative  m-0 scroll-smooth snap-y">

        <div
          className="flex flex-col w-full h-full bg-cover bg-center m-0 pr-0 justify-between items-center"
          style={{ backgroundImage: "url(/background.jpg)" }}>
            <NavBar/>
            <LoginForm/>
            <Footer/>
        </div>
      </main>
  );
};

export default Login;
