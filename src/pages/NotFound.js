import React from "react";
import LocaleContext from "../contexts/LocaleContext";

export default function NotFound() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="note-app__not-found">
      <img src="./error404.svg" alt="Page not found" width="400" />
      <p>{locale === "id" ? "Halaman tidak ditemukan." : "Page not found."}</p>
    </div>
  );
}
