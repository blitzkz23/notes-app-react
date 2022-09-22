import React from "react";
import { getInitialData } from "../utils/data";
import NoteBody from "../components/NoteBody";
import NoteHeader from "../components/NoteHeader";
import autoBind from "auto-bind";

export default class HomePage extends React.Component {
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
      <>
        <header>
          <NoteHeader />
        </header>
        <NoteBody
          notes={this.state.notes}
          searchNote={this.onSearchNoteHandler}
          deleteNote={this.onDeleteNoteHandler}
          archiveNote={this.onArchiveNoteHandler}
          availableQuery={this.state.parentQuery}
        />
      </>
    );
  }
}
