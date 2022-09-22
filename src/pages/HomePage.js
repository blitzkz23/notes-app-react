import React from "react";
import { getNotes, deleteNote, archiveNote } from "../utils/data";
import NoteBody from "../components/NoteBody";
import NoteHeader from "../components/NoteHeader";
import autoBind from "auto-bind";
import { useSearchParams } from "react-router-dom";

export default function HomePageWrapper() {
  // React hook function for getting search params
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNotes(),
      parentQuery: "",
      keyword: props.defaultKeyword || "",
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

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    return (
      <>
        <NoteBody
          notes={this.state.notes}
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
          searchNote={this.onSearchNoteHandler}
          deleteNote={this.onDeleteNoteHandler}
          archiveNote={this.onArchiveNoteHandler}
          availableQuery={this.state.parentQuery}
        />
      </>
    );
  }
}
