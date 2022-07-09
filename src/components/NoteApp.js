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

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
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
    console.log(notes[noteIndex]);
    notes[noteIndex].archived = !notes[noteIndex].archived;
    this.setState(() => {
      this.setState({ notes });
    });
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader />
        <NoteBody
          notes={this.state.notes}
          addNote={this.onAddNoteHandler}
          deleteNote={this.onDeleteNoteHandler}
          archiveNote={this.onArchiveNoteHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
