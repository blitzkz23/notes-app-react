import React from "react";
import Navigation from "./Navigation";

export default function NoteHeader() {
  return (
    <div className="note-app__header">
      <img src="./colordots.svg" alt="color dots" width="80" />
      <Navigation />
    </div>
  );
}
