import React from "react";
import { PropTypes } from "prop-types";
import parser from "html-react-parser";

export default function NoteDetail({ title, body, createdAt }) {
  console.log("Emang ini bukan string?", typeof body);
  return (
    <div className="note-detail__content">
      <h1>{title}</h1>
      <p className="note-detail__date">{createdAt}</p>
      <p className="note-detail__body">
        {body === undefined ? "Loading..." : parser(body)}
      </p>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
