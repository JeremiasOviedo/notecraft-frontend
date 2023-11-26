"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiDeepnote } from "react-icons/si";

const NavBar: React.FC = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-28 text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black fixed nav">
      <div>
        <h1 className="text-3xl font-sans font-bold ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex">
              <SiDeepnote />
              <span className="mx-4">Notecraft</span>
            </div>
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={"#" + link}> {link} </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col mt-[80px] justify-top items-left absolute top-0 left-0 w-full h-[400px] bg-gradient-to-r from-gray-700 via-gray-900 to-black text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="mx-28 cursor-pointer capitalize py-6 text-xl"
            >
              <Link onClick={() => setNav(!nav)} href={"#" + link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
