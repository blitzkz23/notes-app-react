import React from "react";
import NoteItem from "./NoteItem";

function NoteListArchive({ notes, archiveNote, deleteNote }) {
  const filteredArchive = notes.filter((note) => note.archived === true);

  return (
    <div className="notes-list">
      {filteredArchive.length > 0 ? (
        filteredArchive.map((note) => (
          <NoteItem
            {...note}
            key={note.id}
            archiveNote={archiveNote}
            deleteNote={deleteNote}
          />
        ))
      ) : (
        <div className="notes-list__empty-message">Tidak ada catatan.</div>
      )}
    </div>
  );
}

export default NoteListArchive;
