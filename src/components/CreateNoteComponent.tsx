"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { FieldValues } from "react-hook-form";
import {
  useEditor,
  EditorContent,
} from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import StarterKit from "@tiptap/starter-kit";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
  FaHeading,
  FaListOl,
  FaListUl,
  FaUndo,
  FaRedo,
  FaQuoteLeft,
  FaSpinner,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import type { Note, NoteCreationDto } from "@/app/dashboard/page";
import { useAuth } from "./AuthProvider";

interface CreateNotePros {
  note: Note;
  open: boolean;
  closeCreateNote: () => void;
  updateNotes: () => void;
}

const CreateNoteComponent = ({
  note,
  open,
  closeCreateNote,
  updateNotes,
}: CreateNotePros) => {
  const [serverError, setServerError] = useState<string | null>(null);
  const [content, setContent] = useState(note.content);
  const [title, setTitle] = useState(note.title);

  const creationSchema = z.object({
    title: z.string().max(20, "Title is too long"),
    content: z
      .string()
      .max(500, "Note content cannot have more than 500 characters"),
  });

  const { token } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({ resolver: zodResolver(creationSchema) });

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
    setValue("title", note.title);
    setValue("content", note.content);
  }, [note]);

  useEffect(() => {
    if (editor && content !== editor.getText()) {
      editor.commands.setContent(content);
    }
  }, [content]);

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: `${note.content}`,
    onUpdate({ editor }) {
      handleContentChange({ editor });
    },
  });

  const handleContentChange = ({ editor }: { editor : any }) => {
    setValue("content", editor?.getText());
  };

  const handleSubmitConsole = async (data: FieldValues) => {
    console.log(data.title);
    console.log(data.content);
    const updatedNote = { ...note, content };

    console.log("Nota actualizada:", updatedNote);
  };

  const onSubmit = async (data: FieldValues) => {
    const newNote: NoteCreationDto = {
      title: data.title,
      content: data.content,
      categories: note.categories.map((category) => category.idCategory),
    };

    try {
      var url: string = "";

      if (!isNaN(note.idNote)) {
        url = `https://cheroquibackend.hopto.org/${note.idNote}`;
      } else {
        url = "https://cheroquibackend.hopto.org/notes";
      }

      console.log("using url: ", url);
      console.log("sending data: ", newNote);

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newNote),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        updateNotes();
        closeCreateNote();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-fit h-screen">
      {open ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col backdrop-blur-sm bg-white/80 gap-4 p-8 lg:w-[32rem] pt-11 mb-11 w-screen h-screen justify-items-center "
        >
          <input
            {...register("title")}
            type="text"
            placeholder="Enter a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-2xl text-center bg-white p-4"
          />
          <div className="overflow-y-auto flex flex-col h-full bg-white p-4">
            <EditorContent className="h-full" editor={editor} />
          </div>
          <input {...register("content")} type="text" className="hidden" />

          <div className="flex justify-around mb-11">
            <div className="flex w-1/3">
              <button
                onClick={closeCreateNote}
                className="flex rounded-lg p-3  w-96  text-center bg-red-500 text-white text-lg font-semibold justify-center "
              >
                Cancel
              </button>
            </div>
            <div className="flex w-1/3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex rounded-lg p-3  w-96  text-center bg-[#3C6997] text-white text-lg font-semibold justify-center hover:opacity-90 "
              >
                {isSubmitting === false ? (
                  "Save"
                ) : (
                  <FaSpinner className="animate-spin text-2xl" />
                )}
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};

export default CreateNoteComponent;
