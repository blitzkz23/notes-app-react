import React from "react";
import NoteBody from "../components/NoteBody";
import autoBind from "auto-bind";
import { getNotes } from "../utils/api";
import { useSearchParams } from "react-router-dom";

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(
    searchParams.get("keyword") || ""
  );
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    getNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

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
        notes={filteredNotes}
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
        // deleteNote={this.onDeleteNoteHandler}
        // archiveNote={this.onArchiveNoteHandler}
      />
    </>
  );
}
// export default function HomePageWrapper() {
//   // React hook function for getting search params
//   const [searchParams, setSearchParams] = useSearchParams();
//   const keyword = searchParams.get("keyword");

//   function changeSearchParams(keyword) {
//     setSearchParams({ keyword });
//   }

//   return (
//     <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
//   );
// }

// class HomePage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       notes: getNotes(),
//       keyword: props.defaultKeyword || "",
//     };

//     autoBind(this);
//   }

//   onArchiveNoteHandler(id) {
//     archiveNote(id);

//     this.setState(() => {
//       return {
//         notes: getNotes(),
//       };
//     });
//   }

//   onDeleteNoteHandler(id) {
//     deleteNote(id);

//     this.setState(() => {
//       return {
//         notes: getNotes(),
//       };
//     });
//   }

//   onKeywordChangeHandler(keyword) {
//     this.setState(() => {
//       return {
//         keyword,
//       };
//     });

//     this.props.keywordChange(keyword);
//   }

//   render() {
//     // Filter searched keyword in notes title or body
//     const notes = this.state.notes.filter((note) => {
//       return (
//         note.title.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
//         note.body.toLowerCase().includes(this.state.keyword.toLowerCase())
//       );
//     });

//     return (
//       <>
//         <NoteBody
//           notes={notes}
//           keyword={this.state.keyword}
//           keywordChange={this.onKeywordChangeHandler}
//           deleteNote={this.onDeleteNoteHandler}
//           archiveNote={this.onArchiveNoteHandler}
//           availableQuery={this.state.parentQuery}
//         />
//       </>
//     );
//   }
// }
