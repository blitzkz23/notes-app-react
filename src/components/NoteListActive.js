import React from "react";
import NoteItem from "./NoteItem";

function NoteListActive({ notes }) {
  return (
    <div className="notes-list">
      {notes
        .filter((note) => note.archived === false)
        .map((note) => (
          <NoteItem {...note} />
        ))}
    </div>
  );
}

export default NoteListActive;
