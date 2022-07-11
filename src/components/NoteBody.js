import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

export default function NoteBody({
  notes,
  addNote,
  archiveNote,
  deleteNote,
  availableQuery,
}) {
  const filterActive = notes.filter((note) => note.archived === false);
  const filteredArchive = notes.filter((note) => note.archived === true);
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList
        notes={filterActive}
        archiveNote={archiveNote}
        deleteNote={deleteNote}
        availableQuery={availableQuery}
      />
      <h2>Arsip</h2>
      <NoteList
        notes={filteredArchive}
        archiveNote={archiveNote}
        deleteNote={deleteNote}
        availableQuery={availableQuery}
      />
    </div>
  );
}
