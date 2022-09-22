import React from "react";
import AddPage from "../pages/AddPage";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NoteHeader from "./NoteHeader";
import NotFound from "../pages/NotFound";

export default function NoteApp() {
  return (
    <div className="note-app">
      <header>
        <NoteHeader />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
