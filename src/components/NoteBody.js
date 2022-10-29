import React from "react";
import NoteList from "./NoteList";
import { PropTypes } from "prop-types";
import SearchBar from "./SearchBar";

export default function NoteBody({
  name,
  notes,
  keyword,
  keywordChange,
  archiveNote,
  deleteNote,
}) {
  const filterActive = notes.filter((note) => note.archived === false);

  return (
    <div className="note-app__body">
      <h1 className="note-app__welcome">Selamat datang, {name}.</h1>
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
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
