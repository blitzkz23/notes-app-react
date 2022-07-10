import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, archiveNote, deleteNote, availableQuery }) {
  const filterQuery = notes.filter(
    (note) => note.title.toLowerCase().indexOf(availableQuery) !== -1
  );

  console.log(availableQuery);

  return (
    <div className="notes-list">
      {filterQuery.length > 0 ? (
        filterQuery.map((note) => (
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

export default NoteList;
