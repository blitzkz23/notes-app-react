import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({
  notes,
  archiveNote,
  deleteNote,
  availableQuery,
}) {
  const filterQuery = notes.filter(
    (note) =>
      note.title
        .toLowerCase()
        .indexOf(availableQuery.toString().toLowerCase()) !== -1
  );

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
