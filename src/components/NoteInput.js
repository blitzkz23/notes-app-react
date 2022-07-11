import React from "react";

export default class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxLength: 50,
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
        maxLength: 50 - event.target.value.length,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.title === "" || this.state.body === "") {
      alert("Mohon mengisi field yang masih kosong");
    } else {
      this.props.addNote(this.state);
    }
    this.setState(() => {
      return {
        title: "",
        body: "",
        maxLength: 50,
      };
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h1>Buat Catatan</h1>
        <p className="note-input__title__char-limit">
          Max Karakter: {this.state.maxLength}
        </p>

        {this.state.maxLength === 0 ? (
          <input
            className="note-input__title"
            type="text"
            placeholder="Masukkan judul..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            maxLength="50"
          ></input>
        ) : (
          <input
            className="note-input__title"
            type="text"
            placeholder="Masukkan judul..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          ></input>
        )}

        <textarea
          className="note-input__body"
          type="text"
          placeholder="Masukkan isi catatan disini..."
          rows="5"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        ></textarea>
        <button className="note-input__button">Buat</button>
      </form>
    );
  }
}
