import React from "react";
import { getArchivedNotes, unarchiveNote, deleteNote } from "../utils/api";
import autoBind from "auto-bind";
import {} from "../utils/data";
import NoteList from "../components/NoteList";

export default function ArchivePage() {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
    });
  }, [notes]);

  console.log(notes);
  const archivedNote = notes.filter((note) => {
    return note.archived === true;
  });

  async function onDeleteNoteHandler(id) {
    await deleteNote(id);

    // Update the notes from the server
    const { data } = await getArchivedNotes();
    setNotes(data);
  }

  async function onUnarchiveNoteHandler(id) {
    await unarchiveNote(id);

    // Update the notes from the server
    const { data } = await getArchivedNotes();
    setNotes(data);
  }

  return (
    <section className="note-app__body">
      <h2>Catatan Terarsipkan</h2>
      <NoteList
        notes={archivedNote}
        archiveNote={onUnarchiveNoteHandler}
        deleteNote={onDeleteNoteHandler}
      />
    </section>
  );
}
