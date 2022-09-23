import React from "react";
import { PropTypes } from "prop-types";

export default function NoteItemActionArchive({ id, archived, archiveNote }) {
  return (
    <React.Fragment>
      {archived === true ? (
        <button
          className="note-item__archive-button"
          onClick={() => archiveNote(id)}
        >
          Aktifkan
        </button>
      ) : (
        <button
          className="note-item__archive-button"
          onClick={() => archiveNote(id)}
        >
          Arsipkan
        </button>
      )}
    </React.Fragment>
  );
}

NoteItemActionArchive.propTypes = {
  id: PropTypes.number.isRequired,
  archived: PropTypes.bool.isRequired,
  archiveNote: PropTypes.func.isRequired,
};
