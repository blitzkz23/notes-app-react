import React from "react";
import { getNotes } from "../utils/data";
import autoBind from "auto-bind";
import { archiveNote, deleteNote } from "../utils/data";
import NoteList from "../components/NoteList";

export default class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNotes(),
    };

    autoBind(this);
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
    const filteredArchives = this.state.notes.filter((note) => note.archived);

    return (
      <section className="note-app__body">
        <h2>Catatan Terarsipkan</h2>
        <NoteList
          notes={filteredArchives}
          archiveNote={this.onArchiveNoteHandler}
          deleteNote={this.onDeleteNoteHandler}
        />
      </section>
    );
  }
}
