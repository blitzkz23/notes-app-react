import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import LocaleContext from "../contexts/LocaleContext";

export default function RegisterInput({ register }) {
  // Custom hooks
  const [name, onNameChangeHandler] = useInput("");
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const { locale } = React.useContext(LocaleContext);

  function onSubmitHandler(event) {
    event.preventDefault();
    register({ name, email, password });
    console.log(name, email, password);
  }

  return (
    <form className="note-input" onSubmit={onSubmitHandler}>
      <h1 className="auth-title">
        {locale === "id" ? "Buat Akun" : "Create an Account"}
      </h1>
      <h4 className="auth-subtitle">
        {locale === "id"
          ? "Silahkan daftar untuk melanjutkan..."
          : "Please register to continue..."}
      </h4>

      <p>{locale === "id" ? "Nama:" : "Name:"}</p>
      <input
        className="note-input__title"
        type="text"
        placeholder={
          locale === "id" ? "Masukkan nama..." : "Enter your name..."
        }
        value={name}
        onChange={onNameChangeHandler}
        maxLength="50"
      ></input>

      <p>E-mail:</p>
      <input
        className="note-input__title"
        type="email"
        placeholder={
          locale === "id" ? "Masukkan e-mail..." : "Enter your email..."
        }
        value={email}
        onChange={onEmailChangeHandler}
        maxLength="50"
      ></input>

      <p>Password:</p>
      <input
        className="note-input__title"
        placeholder={
          locale === "id" ? "Masukkan password..." : "Enter your password..."
        }
        value={password}
        onChange={onPasswordChangeHandler}
        maxLength="50"
        type="password"
        autoComplete="on"
      ></input>

      <p className="auth-account__nav">
        {locale === "id" ? "Kembali ke " : "Return to "}{" "}
        <Link to="/login">{locale === "id" ? "Masuk" : "Login"}</Link>
      </p>

      <button className="note-input__button">
        <h3>{locale === "id" ? "Daftar" : "Register"}</h3>
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
