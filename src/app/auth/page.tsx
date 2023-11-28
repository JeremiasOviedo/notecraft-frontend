import React from "react";
import {NavBar, Footer, RegistrationForm } from "../../components";


const Auth: React.FC = () => {
  return (
      <main className="w-100 h-100 relative  m-0 overflow-hidden scroll-smooth snap-y">

        <div
          className="flex flex-col w-screen h-screen bg-cover bg-center m-0 pr-0 justify-between items-center overflow-auto"
          style={{ backgroundImage: "url(background.jpg)" }}>

            <NavBar/>
            <RegistrationForm/>
            <Footer/>
        </div>
      </main>
  );
};

export default Auth;
