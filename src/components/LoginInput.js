import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import LocaleContext from "../contexts/LocaleContext";

export default function LoginInput({ login }) {
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const { locale } = React.useContext(LocaleContext);

  function onSubmitHandler(event) {
    event.preventDefault();
    login({ email, password });
  }

  return (
    <form className="note-input" onSubmit={onSubmitHandler}>
      <h1>{locale === "id" ? "Masuk ke Catatanmu" : "Login to Your Notes"}</h1>
      <h4 className="auth-subtitle">
        {locale === "id"
          ? "Silahkan masuk untuk melanjutkan..."
          : "Please login to continue..."}
      </h4>

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
        {locale === "id" ? "Belum punya akun? " : "Don't have an account? "}
        <Link to="/register">
          {locale === "id" ? " Daftar disini." : " Register here."}
        </Link>
      </p>

      <button className="note-input__button">
        <h3>{locale === "id" ? "Masuk" : "Login"}</h3>
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
