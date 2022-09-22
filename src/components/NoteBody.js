import React from "react";
import NoteList from "./NoteList";
import { PropTypes } from "prop-types";
import SearchBar from "./SearchBar";

export default function NoteBody({
  notes,
  keyword,
  keywordChange,
  archiveNote,
  deleteNote,
}) {
  const filterActive = notes.filter((note) => note.archived === false);
  const filteredArchive = notes.filter((note) => note.archived === true);
  return (
    <div className="note-app__body">
      <SearchBar keyword={keyword} keywordChange={keywordChange} />
      <h2>Catatan Aktif</h2>
      <NoteList
        notes={filterActive}
        archiveNote={archiveNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

NoteBody.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  archiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
