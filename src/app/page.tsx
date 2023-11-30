import React from "react";
import { Hero, About, Technologies,Footer } from "../components";
import dynamic from 'next/dynamic'
 
const NavBar = dynamic(() => import('../components/NavBar'), { ssr: false })

const Home: React.FC = () => {
  return (
      <main className="w-full h-full relative  m-0 overflow-hidden scroll-smooth snap-y">

        <div
          className="flex flex-col w-full h-full bg-cover bg-center m-0 pr-0"
          style={{ backgroundImage: "url(/background.jpg)" }}
        >
          <NavBar/>
          <Hero />
          <About />
          <Technologies />
          <Footer />
        </div>
      </main>
  );
};

export default Home;
