import React from "react";

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
