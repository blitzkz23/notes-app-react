import React from "react";
import { PropTypes } from "prop-types";
import Navigation from "./Navigation";

export default function NoteHeader() {
  return (
    <div className="note-app__header">
      <img src="./colordots.svg" alt="color dots" width="80" />
      <Navigation />
    </div>
  );
}
