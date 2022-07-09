import React from "react";

function NoteItemAction({ id, archived, archiveNote, deleteNote }) {
  return (
    <div className="note-item__action">
      <button
        className="note-item__delete-button"
        onClick={() => deleteNote(id)}
      >
        Hapus
      </button>

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
    </div>
  );
}

export default NoteItemAction;
