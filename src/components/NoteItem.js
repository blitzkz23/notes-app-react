import React from "react";
import { showFormattedDate } from "../utils/data";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({
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

export default NoteItem;
