import React from "react";
import NoteList from "./NoteList";
import { PropTypes } from "prop-types";
import SearchBar from "./SearchBar";
import LocaleContext from "../contexts/LocaleContext";

export default function NoteBody({
  name,
  notes,
  keyword,
  keywordChange,
  archiveNote,
  deleteNote,
}) {
  const { locale } = React.useContext(LocaleContext);
  const filterActive = notes.filter((note) => note.archived === false);
  console.log(name);
  return (
    <div className="note-app__body">
      <h1 className="note-app__welcome">
        {locale === "id"
          ? "Selamat datang, " + name + "."
          : "Welcome, " + name + "."}
      </h1>
      <SearchBar keyword={keyword} keywordChange={keywordChange} />
      <h2>{locale === "id" ? "Catatan Aktif" : "Active Notes"}</h2>
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
