import React from "react";
import NoteItem from "./NoteItem";
import { PropTypes } from "prop-types";

export default function NoteList({ notes, archiveNote, deleteNote }) {
  return notes.length > 0 ? (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          {...note}
          key={note.id}
          archiveNote={archiveNote}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  ) : (
    <div className="notes-list__empty-message">
      <img src="./empty_data.svg" alt="empty" width={400} />
      <p>Tidak ada catatan.</p>
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  archiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
