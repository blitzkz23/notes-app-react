import { getNoteById } from "../utils/data";
import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";

export default function DetailPageWrapper() {
  // React hook function to accept id parameter from clicked note in HomePage
  const { id } = useParams();
  return <DetailPage id={Number(id)} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNoteById(props.id),
    };
  }

  render() {
    if (this.state.note == null) {
      return (
        <section className="note-detail__not-found">
          <p>Catatan tidak ditemukan</p>
        </section>
      );
    }

    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}
