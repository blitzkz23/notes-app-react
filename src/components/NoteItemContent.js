import React from "react";
import { PropTypes } from "prop-types";

export default function NoteItemContent({ title, createdAt, body }) {
  return (
    <div className="note-item__content">
      <h5 className="note-item__title">{title}</h5>
      <p className="note-item__date">{createdAt}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

NoteItemContent.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
