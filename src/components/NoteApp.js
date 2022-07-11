import React from "react";
import { getInitialData } from "../utils/data";
import NoteBody from "./NoteBody";
import NoteHeader from "./NoteHeader";
import autoBind from "auto-bind";

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      parentQuery: "",
    };

    autoBind(this);
  }

  onSearchNoteHandler(queryInput) {
    this.setState(() => {
      return {
        parentQuery: queryInput,
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onArchiveNoteHandler(id) {
    const { notes } = this.state;
    const noteIndex = notes.findIndex((note) => note.id === id);
    notes[noteIndex].archived = !notes[noteIndex].archived;
    this.setState(() => {
      this.setState({ notes });
    });
  }

  onDeleteNoteHandler(id) {
    let { notes } = this.state;
    notes = notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader searchNote={this.onSearchNoteHandler} />
        <NoteBody
          notes={this.state.notes}
          addNote={this.onAddNoteHandler}
          deleteNote={this.onDeleteNoteHandler}
          archiveNote={this.onArchiveNoteHandler}
          availableQuery={this.state.parentQuery}
        />
      </div>
    );
  }
}
