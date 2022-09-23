import React from "react";
import { PropTypes } from "prop-types";

export default function NoteItemActionDelete({ id, deleteNote }) {
  return (
    <React.Fragment>
      <button
        className="note-item__delete-button"
        onClick={() => deleteNote(id)}
      >
        Hapus
      </button>
    </React.Fragment>
  );
}

NoteItemActionDelete.propTypes = {
  id: PropTypes.number.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
