import { getNoteById } from "../utils/data";
import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";

export default function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
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
        <div className="note-detail__not-found">
          <p>Catatan tidak ditemukan</p>
        </div>
      );
    }

    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}
