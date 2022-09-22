import React from "react";
import NoteHeader from "../components/NoteHeader";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/data";
import { useNavigate } from "react-router-dom";

export default function AddPage() {
  // React hook function for navigating
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }

  return (
    <>
      <header>
        <NoteHeader />
      </header>
      <NoteInput addNote={onAddNoteHandler} />
    </>
  );
}
