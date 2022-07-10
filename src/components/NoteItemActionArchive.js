import React from "react";

function NoteItemActionArchive({ id, archived, archiveNote }) {
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

export default NoteItemActionArchive;
