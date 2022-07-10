import React from "react";

function NoteItemActionDelete({ id, deleteNote }) {
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

export default NoteItemActionDelete;
