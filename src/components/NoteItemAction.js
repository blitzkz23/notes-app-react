import React from "react";
import NoteItemActionArchive from "./NoteItemActionArchive";
import NoteItemActionDelete from "./NoteItemActionDelete";
import { PropTypes } from "prop-types";

export default function NoteItemAction({
  id,
  archived,
  archiveNote,
  deleteNote,
}) {
  return (
    <div className="note-item__action">
      <NoteItemActionDelete id={id} deleteNote={deleteNote} />
      <NoteItemActionArchive
        id={id}
        archived={archived}
        archiveNote={archiveNote}
      />
    </div>
  );
}

NoteItemAction.propTypes = {
  id: PropTypes.number.isRequired,
  archived: PropTypes.bool.isRequired,
  archiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
