import React from "react";
import NoteItem from "./NoteItem";

function NoteListActive({ notes, archiveNote, deleteNote }) {
  const filterActive = notes.filter((note) => note.archived === false);

  return (
    <div className="notes-list">
      {filterActive.length > 0 ? (
        filterActive.map((note) => (
          <NoteItem
            {...note}
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

export default NoteListActive;
