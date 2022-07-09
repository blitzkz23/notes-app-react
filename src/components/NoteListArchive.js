import React from "react";
import NoteItem from "./NoteItem";

function NoteListArchive({ notes }) {
  return (
    <div className="notes-list">
      {notes
        .filter((note) => note.archived === true)
        .map((note) => (
          <NoteItem {...note} />
        ))}
    </div>
  );
}

export default NoteListArchive;
