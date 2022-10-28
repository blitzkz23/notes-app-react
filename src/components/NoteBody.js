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
  return (
    <div className="note-app__body">
      <SearchBar keyword={keyword} keywordChange={keywordChange} />
      <h2>Catatan Aktif</h2>
      <NoteList
        notes={notes}
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
