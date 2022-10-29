import React from "react";
import { PropTypes } from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

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
        body: event.target.innerHTML,
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
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
              <h1>{locale === "id" ? "Buat Catatan" : "Create a Note"}</h1>
              <p className="note-input__title__char-limit">
                {locale === "id"
                  ? "Karakter tersisa: " + this.state.maxLength
                  : "Characters left: " + this.state.maxLength}
              </p>

              {this.state.maxLength === 0 ? (
                <input
                  className="note-input__title"
                  type="text"
                  placeholder={
                    locale === "id" ? "Masukkan judul..." : "Enter a title..."
                  }
                  value={this.state.title}
                  onChange={this.onTitleChangeEventHandler}
                  maxLength="50"
                ></input>
              ) : (
                <input
                  className="note-input__title"
                  type="text"
                  placeholder={
                    locale === "id" ? "Masukkan judul..." : "Enter a title..."
                  }
                  value={this.state.title}
                  onChange={this.onTitleChangeEventHandler}
                ></input>
              )}

              <div
                className="note-input__body"
                type="text"
                placeholder={
                  locale === "id"
                    ? "Masukkan isi catatan..."
                    : "Enter a note's content..."
                }
                rows="5"
                value={this.state.body}
                onInput={this.onBodyChangeEventHandler}
                contentEditable
              />

              <button className="note-input__button">
                {locale === "id" ? "Buat Catatan" : "Create a Note"}
              </button>
            </form>
          );
        }}
      </LocaleConsumer>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};
