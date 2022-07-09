import React from "react";
import NoteInput from "./NoteInput";
import NoteListActive from "./NoteListActive";
import NoteListArchive from "./NoteListArchive";

function NoteBody({ notes, addNote }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteListActive notes={notes} />
      <h2>Arsip</h2>
      <NoteListArchive notes={notes} />
    </div>
  );
}

export default NoteBody;
