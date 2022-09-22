import React from "react";
import { PropTypes } from "prop-types";

export default function NoteDetail({ title, body, createdAt }) {
  return (
    <div className="note-detail__content">
      <h1>{title}</h1>
      <p className="note-detail__date">{createdAt}</p>
      <p className="note-detail__body">{body}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
