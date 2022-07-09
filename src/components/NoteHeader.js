import React from "react";

class NoteHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };

    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        ...prevState,
        query: event.target.value,
      };
    });

    this.props.searchNote(this.state);
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <input
          type="text"
          placeholder="Cari catatan..."
          onChange={this.onSearchChangeEventHandler}
        ></input>
      </div>
    );
  }
}

export default NoteHeader;
