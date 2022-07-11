import React from "react";

export default function NoteItemContent({ title, createdAt, body }) {
  return (
    <div className="note-item__content">
      <h5 className="note-item__title">{title}</h5>
      <p className="note-item__date">{createdAt}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}
