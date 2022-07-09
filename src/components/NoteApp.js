import React from "react";
import { getInitialData } from "../utils/data";
import NoteBody from "./NoteBody";
import NoteHeader from "./NoteHeader";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader />
        <NoteBody />
      </div>
    );
  }
}

export default NoteApp;
