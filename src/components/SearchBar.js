import React from "react";
import { PropTypes } from "prop-types";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ keyword, keywordChange, searchNote }) {
  return (
    <div className="note-search__wrapper">
      <div className="note-search__icon">
        <FiSearch />
      </div>
      <input
        className="note-search__input"
        type="text"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={(event) => {
          searchNote(event.target.value);
          keywordChange(event.target.value);
        }}
      ></input>
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
  searchNote: PropTypes.func.isRequired,
};
