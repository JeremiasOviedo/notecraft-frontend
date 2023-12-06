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
  updateNotes: (updatedNotes: Note[]) => void;
}

const emptyNote = {} as Note;

const DashboardContent = ({
  notes,
  links,
  handlePageChange,
  pageNumber,
  updateNotes,
}: ContentProps) => {
  const { token } = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);

  const toggleDropdown = (idNote: number) => {
    setDropdownVisible((prevIdNote) => (prevIdNote === idNote ? null : idNote));
  };
  const [selectedNote, setSelectedNote] = useState<Note>({} as Note);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [createNoteOpen, setCreateNoteOpen] = useState(false);

  const openDeleteModal = (note: Note) => {
    setSelectedNote(note);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedNote(emptyNote);
  };

  const openCreateNote = (note: Note) => {
    setSelectedNote((prevNote) => {
      return note;
    });
    setCreateNoteOpen(false);
    setCreateNoteOpen(true);
  };

  const closeCreateNote = () => {
    setCreateNoteOpen(false);
    setSelectedNote(emptyNote);
  };

  const handleNoteDelete = async (idNote: number | null) => {
    try {
      const response = await fetch(`http://localhost:8000/notes/${idNote}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log("deleted succesfully");

        const updatedNotes: Note[] = notes.filter(function (note) {
          return note.idNote !== idNote;
        });
        console.log(updatedNotes);
        updateNotes(updatedNotes);
      }
    } catch (error) {
      console.log(error);
    }

    closeDeleteModal();
  };

  const listNotes = notes.map((note) => (
    <div
      key={note.idNote}
      className="flex flex-col bg-white p-4 pb-0 shadow-md w-full lg:w-80 max-h-[26rem] justify-between m-1"
    >
      <div className="flex flex-row justify-between">
        {dropdownVisible === note.idNote ? (
          <button className="mb-0" onClick={() => toggleDropdown(note.idNote)}>
            <FaEllipsisV />
          </button>
        ) : (
          <button className="mb-0" onClick={() => toggleDropdown(note.idNote)}>
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

  const isPreviousDisabled = !links.previous;
  const isNextDisabled = !links.next;

  return (
    <div className="flex">
      <div
        className={
          "flex flex-col w-full " + (createNoteOpen ? "hidden md:flex flex-col" : "display")
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

        <div className="h-full w-full bg-transparent  px-2 overflow-auto items-center align-center flex mt-2 ">
          <div className=" flex flex-col md:flex-row w-full gap-8 flex-shrink flex-wrap justify-evenly">
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
      />
    </div>
  );
};

export default DashboardContent;
