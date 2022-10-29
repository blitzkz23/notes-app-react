import React from "react";
import { PropTypes } from "prop-types";
import { FiSearch } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";

export default function SearchBar({ keyword, keywordChange }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="note-search__wrapper">
      <div className="note-search__icon">
        <FiSearch />
      </div>
      <input
        className="note-search__input"
        type="text"
        placeholder={locale === "id" ? "Cari catatan..." : "Search notes..."}
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      ></input>
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
