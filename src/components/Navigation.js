import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Beranda</Link>
        </li>
        <li>
          <Link to="/archive">Arsip</Link>
        </li>
        <li>
          <Link to="/add">Tambah</Link>
        </li>
      </ul>
    </nav>
  );
}
