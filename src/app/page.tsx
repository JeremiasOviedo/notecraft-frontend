import Image from "next/image";
import { Hero } from "../components";
import {About} from "../components";

export default function Home() {
  return (
    <main className="w-full h-screen relative xl:px-8 md:px-6 sm:px-3 m-0">
      <div
        className="flex flex-col w-full h-full bg-cover bg-center m-0 pr-0"
        style={{ backgroundImage: "url(background.jpg)" }}
      >
        <Hero />
        <About />
      </div>
    </main>
  );
}
