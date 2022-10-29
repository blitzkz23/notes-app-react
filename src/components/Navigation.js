import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

export default function Navigation({ logout }) {
  return (
    <>
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
      <nav>
        <ul>
          <li>
            <button onClick={logout} className="icon-button">
              <Link to="/">
                <FiLogOut />
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
