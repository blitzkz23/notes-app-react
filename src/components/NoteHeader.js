import React from "react";
import { PropTypes } from "prop-types";

export default function NoteHeader({ searchNote }) {
  return (
    <div className="note-app__header">
      <img src="./colordots.svg" alt="color dots" width="80" />
      <input
        type="text"
        placeholder="Cari catatan..."
        onChange={(event) => searchNote(event.target.value)}
      ></input>
    </div>
  );
}

NoteHeader.propTypes = {
  searchNote: PropTypes.func.isRequired,
};
