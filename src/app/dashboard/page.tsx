"use client";

import React, { useState, useEffect } from "react";
import { DashboardSidebar, DashboardContent } from "@/components";
import { useAuth } from "../../components/AuthProvider";

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

export type Links = {
  next: string;
  previous: string;
}

const Dashboard: React.FC<DashboardProps> = () => {
  const { token, logout } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const[links,setLinks] = useState<Links>({next:'', previous:''});
  const[pageNumber,setPageNumber] = useState<number>(1)

  const [currentPage, setCurrentPage] = useState<string>("/notes?page=0");

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000${currentPage}`,
          {
            method: "GET",
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const jsonResponse = await response.json();
          setNotes(jsonResponse.content);
          setLinks(jsonResponse.links);
          console.log(jsonResponse)
        } else {
          console.log("ocurrio un error");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getNotes();
  }, [token, currentPage]);

  const handlePageChange = (newPage: string, changePage : number) => {
    setCurrentPage(newPage);
    setPageNumber(pageNumber + (changePage)); 
    console.log(newPage)
  };

  return (
    <main className="w-full h-screen relative  m-0 overflow-hidden scroll-smooth snap-y">
      <div className="flex w-full h-full bg-cover bg-center m-0 pr-0">
        <DashboardSidebar />
        <DashboardContent notes={notes} links={links} handlePageChange={handlePageChange} pageNumber = {pageNumber} />
      </div>
    </main>
  );
};

export default Dashboard;
