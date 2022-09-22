import React from "react";
import { getNotes, deleteNote, archiveNote } from "../utils/data";
import NoteBody from "../components/NoteBody";
import NoteHeader from "../components/NoteHeader";
import autoBind from "auto-bind";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNotes(),
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
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getNotes(),
      };
    });
  }

  onDeleteNoteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getNotes(),
      };
    });
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
