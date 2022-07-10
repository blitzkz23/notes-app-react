import React from "react";

class NoteHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
    };

    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    event.preventDefault();
    this.setState(() => {
      return {
        searchQuery: event.target.value,
      };
    });
    this.props.searchNote(this.state);
  }

  render() {
    return (
      <div className="note-app__header">
        <img src="./colordots.svg" alt="color dots" width="100" />
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
