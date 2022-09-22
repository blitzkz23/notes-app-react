import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { PropTypes } from "prop-types";

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

NoteBody.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  addNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  availableQuery: PropTypes.string,
};
