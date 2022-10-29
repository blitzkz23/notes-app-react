import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getSingleNote } from "../utils/api";

export default function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = React.useState({});

  React.useEffect(() => {
    getSingleNote(id).then(({ data }) => {
      setNote(data);
    });
  }, [id]);

  return (
    <>
      <NoteDetail
        title={note.title}
        body={note.body}
        createdAt={note.createdAt}
      />
    </>
  );
}
