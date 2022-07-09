import React from "react";
import { showFormattedDate } from "../utils/data";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ id, title, createdAt, body }) {
  return (
    <div className="note-item">
      <NoteItemContent
        title={title}
        createdAt={showFormattedDate(createdAt)}
        body={body}
      />
      <NoteItemAction id={id} />
    </div>
  );
}

export default NoteItem;
