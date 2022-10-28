import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api";

export default function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);

    if (!error) {
      navigate("/login");
    }
  }

  return (
    <section className="note-app__body">
      <RegisterInput register={onRegisterHandler} />
    </section>
  );
}
