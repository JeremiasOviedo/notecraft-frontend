"use client";

import React, { useState, useEffect } from "react";
import { DashboardSidebar, DashboardContent } from "@/components";
import { useAuth } from "../../components/AuthProvider";
import { LargeNumberLike } from "crypto";

interface DashboardProps {}

export type Category = {
  idCategory: number;
  categoryName: string;
};

export type Note = {
  idNote: number;
  isActive: boolean;
  title: string;
  content: string;
  categories: Category[];
  creationDate: string;
  updateDate: string;
};

export type NoteCreationDto = {
  title: string;
  content: string;
  categories: number[];
};
export type Links = {
  next: string;
  previous: string;
};

const emptyNote = {} as Note;

const Dashboard: React.FC<DashboardProps> = () => {
  const { token, logout } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [links, setLinks] = useState<Links>({ next: "", previous: "" });
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [selectedNote, setSelectedNote] = useState<Note>({} as Note);
  const [createNoteOpen, setCreateNoteOpen] = useState(false);
  const [reRender, setReRender] = useState<number>(0);

  const [currentPage, setCurrentPage] = useState<string>("/notes?page=0");

  const getNotes = useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await fetch(`https://18.231.115.87:443${currentPage}`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const jsonResponse = await response.json();
          setNotes(jsonResponse.content);
          setLinks(jsonResponse.links);
        } else {
          console.log("ocurrio un error");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getNotes();
  }, [token, currentPage, reRender]);

  const updateNotes = () => {
    setReRender(reRender + 1);
  };

  const handlePageChange = (newPage: string, changePage: number) => {
    setCurrentPage(newPage);
    setPageNumber(pageNumber + changePage);
    console.log(newPage);
  };

  const openCreateNote = (note: Note) => {
   
    setSelectedNote((prevNote) => {
      return note
    });
    setCreateNoteOpen(false);
    setCreateNoteOpen(true);
  };

  const closeCreateNote = () => {
    setCreateNoteOpen(false);
    setSelectedNote(emptyNote);
  };

  const selectNote = (note : Note) =>{
    setSelectedNote(note)
  }

  return (
    <main
      className="w-screen h-screen relative  m-0 overflow-hidden scroll-smooth snap-y"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <div className="flex w-screen h-full bg-cover bg-center m-0 pr-0">
        <DashboardSidebar openCreateNote={openCreateNote} />
        <DashboardContent
          notes={notes}
          links={links}
          handlePageChange={handlePageChange}
          pageNumber={pageNumber}
          updateNotes={updateNotes}
          openCreateNote={openCreateNote}
          closeCreateNote={closeCreateNote}
          createNoteOpen={createNoteOpen}
          selectedNote={selectedNote}
          selectNote={selectNote}
        />
      </div>
    </main>
  );
};

export default Dashboard;
