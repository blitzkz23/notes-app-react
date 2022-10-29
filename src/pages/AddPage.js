import React from "react";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function AddPage() {
  // React hook function for navigating
  const navigate = useNavigate();

  async function onAddNoteHandler({ title, body }) {
    await addNote({ title, body });
    navigate("/");
  }

  return (
    <>
      <NoteInput addNote={onAddNoteHandler} />
    </>
  );
}
