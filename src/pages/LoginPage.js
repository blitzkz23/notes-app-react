import React from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api";

export default function LoginPage({ loginSuccess }) {
  const navigate = useNavigate();

  async function onLoginHandler({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
      navigate("/");
    }
  }

  return (
    <section className="note-app__body">
      <LoginInput login={onLoginHandler} />
    </section>
  );
}
