import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";

export default function RegisterInput({ register }) {
  // Custom hooks
  const [name, onNameChangeHandler] = useInput("");
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");

  function onSubmitHandler(event) {
    event.preventDefault();
    register({ name, email, password });
    console.log(name, email, password);
  }

  return (
    <form className="note-input" onSubmit={onSubmitHandler}>
      <h1 className="auth-title">Buat Akun</h1>
      <h4 className="auth-subtitle">Silahkan buat akun untuk melanjutkan...</h4>

      <p>Nama:</p>
      <input
        className="note-input__title"
        type="text"
        placeholder="Masukkan nama Anda..."
        value={name}
        onChange={onNameChangeHandler}
        maxLength="50"
      ></input>

      <p>E-mail:</p>
      <input
        className="note-input__title"
        type="email"
        placeholder="Masukkan e-mail Anda..."
        value={email}
        onChange={onEmailChangeHandler}
        maxLength="50"
      ></input>

      <p>Password:</p>
      <input
        className="note-input__title"
        placeholder="Masukkan sebuah password..."
        value={password}
        onChange={onPasswordChangeHandler}
        maxLength="50"
        type="password"
        autoComplete="on"
      ></input>

      <p className="auth-account__nav">
        Kembali ke <Link to="/login">Masuk</Link>
      </p>

      <button className="note-input__button">
        <h3>Buat</h3>
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
