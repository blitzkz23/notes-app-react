import React from "react";
import AddPage from "../pages/AddPage";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NoteHeader from "./NoteHeader";
import NotFound from "../pages/NotFound";
import DetailPage from "../pages/DetailPage";
import ArchivePage from "../pages/ArchivePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

export default function NoteApp() {
  const pathDefault = "/";
  const pathAdd = "/add";
  const pathDetail = "/note/:id";
  const pathArchive = "/archive";
  const pathNotFound = "/*";
  const pathRegister = "/register";
  const pathLogin = "/login";

  return (
    <div className="note-app">
      <header>
        <NoteHeader />
      </header>
      <main>
        <Routes>
          <Route path={pathDefault} element={<HomePage />} />
          <Route path={pathAdd} element={<AddPage />} />
          <Route path={pathArchive} element={<ArchivePage />} />
          <Route path={pathDetail} element={<DetailPage />} />
          <Route path={pathNotFound} element={<NotFound />} />
          <Route path={pathRegister} element={<RegisterPage />} />
          <Route path={pathLogin} element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  );
}
