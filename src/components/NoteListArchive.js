import React from "react";
import NoteItem from "./NoteItem";

function NoteListArchive({ notes, archiveNote, deleteNote }) {
  return (
    <div className="notes-list">
      {notes
        .filter((note) => note.archived === true)
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

export default NoteListArchive;
