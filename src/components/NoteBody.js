import React from "react";
import NoteInput from "./NoteInput";
import NoteListActive from "./NoteListActive";
import NoteListArchive from "./NoteListArchive";

function NoteBody({ notes, addNote, archiveNote, deleteNote }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteListActive
        notes={notes}
        archiveNote={archiveNote}
        deleteNote={deleteNote}
      />
      <h2>Arsip</h2>
      <NoteListArchive
        notes={notes}
        archiveNote={archiveNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default NoteBody;
