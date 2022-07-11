import React from "react";
import NoteItemActionArchive from "./NoteItemActionArchive";
import NoteItemActionDelete from "./NoteItemActionDelete";

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
