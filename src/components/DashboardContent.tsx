"use client";
import React, { useState } from "react";
import type { Note, Links } from "../app/dashboard/page";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaEllipsisH,
  FaEllipsisV,
  FaRegEye,
} from "react-icons/fa";
import { RiChatDeleteFill } from "react-icons/ri";
import { useAuth } from "./AuthProvider";
import { DeleteNoteModal, CreateNoteComponent } from ".";

interface ContentProps {
  notes: Note[];
  links: Links;
  pageNumber: number;
  handlePageChange: (newPage: string, changePage: number) => void;
  updateNotes: () => void;
  openCreateNote: (note: Note) => void;
  closeCreateNote: () => void;
  createNoteOpen: boolean;
  selectedNote: Note;
  selectNote: (note: Note) => void;
}

const emptyNote = {} as Note;

const DashboardContent = ({
  notes,
  links,
  handlePageChange,
  pageNumber,
  updateNotes,
  openCreateNote,
  closeCreateNote,
  createNoteOpen,
  selectedNote,
  selectNote,
}: ContentProps) => {
  const { token } = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);

  const toggleDropdown = (idNote: number) => {
    setDropdownVisible((prevIdNote) => (prevIdNote === idNote ? null : idNote));
  };

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const openDeleteModal = (note: Note) => {
    selectNote(note);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    selectNote(emptyNote);
  };

  const handleNoteDelete = async (idNote: number) => {
    try {
      const response = await fetch(`https://18.231.115.87:443/${idNote}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log("deleted succesfully");
        updateNotes();
      }
    } catch (error) {
      console.log(error);
    }

    closeDeleteModal();
  };

  const listNotes = notes.map((note) => (
    <div
      key={note.idNote}
      className="flex flex-col bg-white p-4 pb-0 shadow-md w-full lg:w-80 max-h-[26rem] justify-between "
    >
      <div className="flex flex-col h-full shrink">
        <div className="flex flex-row justify-between">
          {dropdownVisible === note.idNote ? (
            <button
              className="mb-0"
              onClick={() => toggleDropdown(note.idNote)}
            >
              <FaEllipsisV />
            </button>
          ) : (
            <button
              className="mb-0"
              onClick={() => toggleDropdown(note.idNote)}
            >
              <FaEllipsisH />
            </button>
          )}

          {dropdownVisible === note.idNote && (
            <div className="flex gap-4">
              <button
                className="text-sky-500 text-2xl font-bold"
                onClick={() => openCreateNote(note)}
              >
                <FaRegEye />
              </button>
              <button
                className="text-red-500 text-2xl font-bold"
                onClick={() => openDeleteModal(note)}
              >
                <RiChatDeleteFill />
              </button>
            </div>
          )}
        </div>
        <div className= 'flex flex-col justify-evenly h-full'>
          <span className="text-center m-1 text-slate-900 font-bold text-lg justify-self-start">
            {note.title}
          </span>
          <p className="text-slate-800 text-ellipsis overflow-clip h-4/6  ">
            {note.content}
          </p>
          <span className="flex text-gray-600 text-sm font-light font-sans self-end justify-self-start">
                {note.creationDate}
              </span>
        </div>
      </div>
    </div>
  ));

  const isPreviousDisabled = !links.previous;
  const isNextDisabled = !links.next;

  return (
    <div className="flex w-screen">
      <div
        className={
          "flex flex-col w-full overflow-auto " +
          (createNoteOpen ? "hidden md:flex flex-col " : "display w-full")
        }
      >
        <div className="w-full bg-transparent  shadow-md flex justify-center">
          <div className="text-center mb-2 mt-2 h-[3rem] flex items-center justify-center gap-4  bg-[#3C6997] p-4 rounded-2xl shadow-md w-fit">
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
              disabled={isNextDisabled}
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>

        <div className="w-full bg-transparent px-2 oitems-center align-center flex mt-2 ">
          <div className=" flex flex-col md:flex-row w-full gap-8 flex-shrink flex-wrap overflow-y-auto justify-evenly">
            {listNotes}
          </div>
        </div>
        <DeleteNoteModal
          open={deleteModalOpen}
          note={selectedNote}
          handleDeleteNote={handleNoteDelete}
          closeDeleteModal={closeDeleteModal}
        />
      </div>

      <CreateNoteComponent
        open={createNoteOpen}
        note={selectedNote}
        closeCreateNote={closeCreateNote}
        updateNotes={updateNotes}
      />
    </div>
  );
};

export default DashboardContent;
