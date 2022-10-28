import React from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "../components/LoginInput";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <section className="note-app__body">
      {/* <h2>Daftarkan Akun</h2> */}
      <LoginInput />
    </section>
  );
}
