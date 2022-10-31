import React from "react";
import NoteList from "./NoteList";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import LocaleContext from "../contexts/LocaleContext";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

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
      <button className="note-app__button-add">
        <Link to="/add">
          <FiPlus />
        </Link>
      </button>
    </div>
  );
}

NoteBody.propTypes = {
  name: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
