import React from "react";
import { Link } from "react-router-dom";

export default function RegisterInput() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function onEmailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function onPasswordChangeHandler(event) {
    setPassword(event.target.value);
  }

  return (
    <form className="note-input" onSubmit={setEmail}>
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

      <button className="note-input__button">Masuk</button>
    </form>
  );
}
