import React from "react";
import NoteBody from "../components/NoteBody";
import { getNotes, archiveNote, deleteNote } from "../utils/api";
import { useSearchParams } from "react-router-dom";

export default function HomePage({ name }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(
    searchParams.get("keyword") || ""
  );
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    getNotes().then(({ data }) => {
      setNotes(data);
    });
  }, [notes]);

  async function onArchiveNoteHandler(id) {
    await archiveNote(id);

    // Update the notes from the server
    const { data } = await getNotes();
    setNotes(data);
  }

  async function onDeleteNoteHandler(id) {
    await deleteNote(id);

    // Update the notes from the server
    const { data } = await getNotes();
    setNotes(data);
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      <NoteBody
        name={name}
        notes={filteredNotes}
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
        deleteNote={onDeleteNoteHandler}
        archiveNote={onArchiveNoteHandler}
      />
    </>
  );
}
