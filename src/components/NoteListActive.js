import React from "react";
import NoteItem from "./NoteItem";

function NoteListActive({ notes, archiveNote, deleteNote }) {
  return (
    <div className="notes-list">
      {notes
        .filter((note) => note.archived === false)
        .map((note) => (
          <NoteItem
            {...note}
            archiveNote={archiveNote}
            deleteNote={deleteNote}
          />
        ))}
    </div>
  );
}

export default NoteListActive;
