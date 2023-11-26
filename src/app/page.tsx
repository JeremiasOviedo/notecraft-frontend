import React from "react";
import { Hero, About, Technologies, NavBar } from "../components";

const Home: React.FC = () => {
  return (
      <main className="w-100 h-100 relative  m-0 overflow-hidden scroll-smooth snap-y">

        <div
          className="flex flex-col w-full h-full bg-cover bg-center m-0 pr-0"
          style={{ backgroundImage: "url(background.jpg)" }}
        >
          <NavBar/>
          <Hero />
          <About />
          <Technologies />
        </div>
      </main>
  );
};

export default Home;
