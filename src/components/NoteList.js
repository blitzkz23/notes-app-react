import React from "react";
import NoteItem from "./NoteItem";
import { PropTypes } from "prop-types";

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

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  archiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  availableQuery: PropTypes.string,
};
