import Image from "next/image";
import { Hero, About, Technologies } from "../components";

export default function Home() {
  return (
    <main className="w-100 h-100 relative  m-0 overflow-hidden">
      <div
        className="flex flex-col w-full h-full bg-cover bg-center m-0 pr-0"
        style={{ backgroundImage: "url(background.jpg)"}}
      >
        <Hero />
        <About />
        <Technologies />
      </div>
    </main>
  );
}
