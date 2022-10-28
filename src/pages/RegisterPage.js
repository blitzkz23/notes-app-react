import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";

export default function RegisterPage() {
  const navigate = useNavigate();

  return (
    <section className="note-app__body">
      {/* <h2>Daftarkan Akun</h2> */}
      <RegisterInput />
    </section>
  );
}
