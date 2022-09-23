import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import parser from "html-react-parser";

export default function NoteItemContent({ id, title, createdAt, body }) {
  return (
    <div className="note-item__content">
      <Link to={`/note/${id}`}>
        <h5 className="note-item__title">{title}</h5>
        <p className="note-item__date">{createdAt}</p>
        <p className="note-item__body">{parser(body)}</p>
      </Link>
    </div>
  );
}

NoteItemContent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
