"use client";

import { SiDeepnote } from "react-icons/si";
import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import type { Note } from "@/app/dashboard/page";
import { useAuth } from "./AuthProvider";
import { useRouter } from "next/navigation";

interface SidebarProps {
  openCreateNote: (note: Note) => void;
}

const DashboardSidebar = ({ openCreateNote }: SidebarProps) => {
  const [nav, setNav] = useState(false);
  const { logout } = useAuth();
  const router = useRouter();

  const emptyNote: Note = {
    idNote: Number.NaN,
    title: "Create Note",
    content: "Create Content",
    categories: [{ idCategory: 1, categoryName: "general" }],
    isActive: false,
    creationDate: " ",
    updateDate: " ",
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="flex h-screen">
      {!nav && (
        <div className="flex bg-transparent">
          <div className="flex w-64 flex-col absolute h-screen lg:relative shadow-2xl">
            <div className="flex flex-col flex-grow pt-5 backdrop-blur-sm bg-white/80">
              <div className="flex items-center justify-start flex-shrink-0 px-6 gap-4 text-2xl font-bold text-gray-800">
                {" "}
                <SiDeepnote className="text-[#3C6997]" />
                Notecraft
                <div
                  onClick={() => setNav(!nav)}
                  className="cursor-pointer text-gray-800 pl-6"
                >
                  {nav ? (
                    <FaChevronRight className="text-white" />
                  ) : (
                    <FaChevronLeft />
                  )}
                </div>
              </div>
              <div className="px-4 mt-8">
                <label htmlFor="" className="sr-only">
                  {" "}
                  Search{" "}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>

                  <input
                    type="search"
                    name=""
                    id=""
                    className="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-sky-600 focus:border-[#3C6997] sm:text-sm"
                    placeholder="Search here"
                  />
                </div>
              </div>

              <div className="px-4 mt-6">
                <hr className="border-gray-200" />
              </div>

              <div className="flex flex-col flex-1 px-3 mt-6">
                <div className="space-y-4">
                  <nav className="flex-1 space-y-2">
                    <a
                      href="/"
                      title="Home"
                      className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-800 transition-all duration-200 bg-white rounded-lg hover:bg-[#3C6997] group hover:text-white"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Home
                    </a>

                    <button
                      onClick={() => openCreateNote(emptyNote)}
                      className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white bg-[#3C6997] rounded-lg w-full"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M4 12H20M12 4V20"
                            stroke="#fffff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      New Note
                    </button>
                  </nav>

                  <hr className="border-gray-200" />

                  <nav className="flex-1 space-y-2"></nav>

                  <hr className="border-gray-200" />

                  <nav className="flex-1 space-y-2">
                    <button
                      onClick={() => handleLogout()}
                      className="flex items-center bg-red-200 px-4 w-full py-2.5 text-sm font-medium transition-all duration-200 text-gray-800 hover:text-white rounded-lg hover:bg-red-500"
                    >
                      <BiLogOutCircle className=" ext-2xl flex-shrink-0 w-5 h-5 mr-4" />
                      <span>Logout</span>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {nav && (
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer p-4  text-gray-800 flex justify-center text-2xl h-fit absolute"
        >
          {nav ? <FaChevronRight className="text-white" /> : <FaChevronLeft />}
        </div>
      )}
    </div>
  );
};
export default DashboardSidebar;
