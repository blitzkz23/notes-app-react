import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

export default function LoginInput({ login }) {
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");

  function onSubmitHandler(event) {
    event.preventDefault();
    login({ email, password });
  }

  return (
    <form className="note-input" onSubmit={onSubmitHandler}>
      <h1>Masuk </h1>
      <h4 className="auth-subtitle">Silahkan masuk untuk melanjutkan...</h4>

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
        Belum punya akun? <Link to="/register">Daftar</Link>
      </p>

      <button className="note-input__button">
        <h3>Masuk</h3>
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
