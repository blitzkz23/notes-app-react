import React from "react";
import { PropTypes } from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

export default function NoteItemActionDelete({ id, deleteNote }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <React.Fragment>
      <button
        className="note-item__delete-button"
        onClick={() => deleteNote(id)}
      >
        {locale === "id" ? "Hapus" : "Delete"}
      </button>
    </React.Fragment>
  );
}

NoteItemActionDelete.propTypes = {
  id: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
