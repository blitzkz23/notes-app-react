import React from "react";
import NoteList from "./NoteList";
import { PropTypes } from "prop-types";
import SearchBar from "./SearchBar";

export default function NoteBody({
  notes,
  searchNote,
  keyword,
  keywordChange,
  archiveNote,
  deleteNote,
  availableQuery,
}) {
  const filterActive = notes.filter((note) => note.archived === false);
  const filteredArchive = notes.filter((note) => note.archived === true);
  return (
    <div className="note-app__body">
      <SearchBar
        searchNote={searchNote}
        keyword={keyword}
        keywordChange={keywordChange}
      />
      <h2>Catatan Aktif</h2>
      <NoteList
        notes={filterActive}
        archiveNote={archiveNote}
        deleteNote={deleteNote}
        availableQuery={availableQuery}
      />
      <h2>Arsip</h2>
      <NoteList
        notes={filteredArchive}
        archiveNote={archiveNote}
        deleteNote={deleteNote}
        availableQuery={availableQuery}
      />
    </div>
  );
}

NoteBody.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  availableQuery: PropTypes.string,
};
