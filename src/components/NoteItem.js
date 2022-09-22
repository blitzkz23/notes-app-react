import React from "react";
import { showFormattedDate } from "../utils/data";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";
import { PropTypes } from "prop-types";

export default function NoteItem({
  id,
  title,
  createdAt,
  body,
  archived,
  archiveNote,
  deleteNote,
}) {
  return (
    <div className="note-item">
      <NoteItemContent
        id={id}
        title={title}
        createdAt={showFormattedDate(createdAt)}
        body={body}
      />
      <NoteItemAction
        id={id}
        archived={archived}
        archiveNote={archiveNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  archiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
