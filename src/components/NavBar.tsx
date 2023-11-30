"use client";
import Link from "next/link";
import { useAuth } from "./AuthProvider";
import React, { useState } from "react";
import { FaBars, FaTimes,FaChevronCircleRight } from "react-icons/fa";
import { SiDeepnote } from "react-icons/si";

const NavBar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const { token, logout } = useAuth();

  console.log(token);

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
    <div className="flex justify-between items-center px-2 w-full h-20  text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black fixed nav">
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

      <ul className="hidden md:flex h-full items-center">
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline text-left">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline text-left">
          <Link href="/#about">About</Link>
        </li>
        {typeof window !== 'undefined' && token ? (
          <>
          <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline text-left">
            <button onClick={logout}>Log out</button>
          </li>
          <li className="nav-links flex items-center gap-2 h-8 bg-[#3C6997] hover:bg-blue-300 px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-white duration-200 link-underline text-left rounded-2xl ">
            <Link href='/dashboard'>To app</Link> <FaChevronCircleRight/>
          </li>
          </>
        ) : (
          <>
            <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline text-left">
              <Link href="/auth/register">Sign Up</Link>
            </li>
            <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline text-left">
              <Link href="/auth/login">Log In</Link>
            </li>
          </>
        )}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col mt-[80px] justify-top items-left absolute top-0 left-0 w-full h-[400px] bg-gradient-to-r from-gray-700 via-gray-900 to-black text-gray-500">
          <li className="mx-4 cursor-pointer capitalize py-6 text-xl">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-4 cursor-pointer capitalize py-6 text-xl">
            <Link href="/#about">About</Link>
          </li>
          <li className="mx-4 cursor-pointer capitalize py-6 text-xl">
            <Link href="/auth/register">Sign Up</Link>
          </li>
          <li className="mx-4 cursor-pointer capitalize py-6 text-xl">
            <Link href="/auth/login">Log in</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
