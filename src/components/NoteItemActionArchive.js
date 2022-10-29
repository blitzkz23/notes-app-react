import React from "react";
import { PropTypes } from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
export default function NoteItemActionArchive({ id, archived, archiveNote }) {
  const { locale } = React.useContext(LocaleContext);
  return (
    <React.Fragment>
      {archived === true ? (
        <button
          className="note-item__archive-button"
          onClick={() => archiveNote(id)}
        >
          {locale === "id" ? "Aktifkan" : "Restore"}
        </button>
      ) : (
        <button
          className="note-item__archive-button"
          onClick={() => archiveNote(id)}
        >
          {locale === "id" ? "Arsipkan" : "Archive"}
        </button>
      )}
    </React.Fragment>
  );
}

NoteItemActionArchive.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  archiveNote: PropTypes.func.isRequired,
};
