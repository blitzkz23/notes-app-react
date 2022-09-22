import React from "react";
import { PropTypes } from "prop-types";

export default function SearchBar({ keyword, keywordChange, searchNote }) {
  return (
    <input
      type="text"
      placeholder="Cari catatan..."
      value={keyword}
      onChange={(event) => {
        searchNote(event.target.value);
        keywordChange(event.target.value);
      }}
    ></input>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
  searchNote: PropTypes.func.isRequired,
};
