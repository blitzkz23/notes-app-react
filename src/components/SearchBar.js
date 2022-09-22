import React from "react";
import { PropTypes } from "prop-types";

export default function SearchBar({ searchNote }) {
  return (
    <input
      type="text"
      placeholder="Cari catatan..."
      onChange={(event) => searchNote(event.target.value)}
    ></input>
  );
}

SearchBar.propTypes = {
  searchNote: PropTypes.func.isRequired,
};
