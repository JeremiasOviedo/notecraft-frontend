"use client";
import React from "react";
import type { Note, Links } from "../app/dashboard/page";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

interface ContentProps {
  notes: Note[];
  links: Links;
  pageNumber: number;
  handlePageChange: (newPage: string, changePage: number) => void;
}

const DashboardContent = ({ notes, links, handlePageChange,pageNumber }: ContentProps) => {
  const listNotes = notes.map((note) => (
    <div
      key={note.idNote}
      className="flex flex-col bg-white p-4 pb-0 shadow-md w-full lg:w-80 max-h-[26rem] justify-between m-1"
    >
      <span className="text-center m-1 text-slate-900 font-bold text-lg">
        {note.title}
      </span>
      <p className="text-slate-800 text-ellipsis overflow-hidden h-fit ">
        {note.content}
      </p>
      <span className="text-gray-600 text-sm  mt-2 font-light font-sans self-end justify-self-end">
        {note.creationDate}
      </span>
    </div>
  ));

  const isPreviousDisabled = !links.previous
  const isNextDisabled = !links.next

  return (

    <div className="flex flex-col">
        <div className="w-full bg-blue-100 p-0 shadow-md flex justify-center " >
      <div className="text-center mb-4 mt-2 h-[3rem] flex items-center justify-center gap-4  bg-[#3C6997] p-4 rounded-2xl shadow-md w-fit">
        <button
          className="text-xl text-white shadow-sm disabled:opacity-50"
          onClick={() => handlePageChange(links.previous, -1)}
          disabled={isPreviousDisabled}
        >
          <FaArrowAltCircleLeft />
        </button>
        <div className="font-bold text-lg text-white">{pageNumber}</div>
        <button
          className="text-xl text-white shadow-sm disabled:opacity-50"
          onClick={() => handlePageChange(links.next, 1)}
          disabled = {isNextDisabled}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
      </div>
    <div className="h-full w-full bg-blue-100 p-0 overflow-auto px-2 items-center flex flex-col">
 
      <div className="flex flex-col lg:flex-row w-full gap-4 flex-shrink flex-wrap justify-around">
        {listNotes}
      </div>
    </div>
    </div>
    
  );
};

export default DashboardContent;
