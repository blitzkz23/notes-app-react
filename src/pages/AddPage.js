import React from "react";
import NoteHeader from "../components/NoteHeader";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/data";

export default function AddPage() {
  function onAddNoteHandler(note) {
    addNote(note);
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
