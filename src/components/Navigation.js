import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiGlobe, FiSun, FiMoon } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";

export default function Navigation({ logout }) {
  const { locale, toggleLocale } = React.useContext(LocaleContext);
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">{locale === "id" ? "Beranda" : "Home"}</Link>
          </li>
          <li>
            <Link to="/archive">{locale === "id" ? "Arsip" : "Archive"}</Link>
          </li>
          <li>
            <Link to="/add">{locale === "id" ? "Tambah" : "Add"}</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <button onClick={toggleTheme} className="icon-button">
              <Link to="/">{theme === "dark" ? <FiSun /> : <FiMoon />}</Link>
            </button>
          </li>
          <li>
            <button onClick={toggleLocale} className="icon-button">
              <Link to="/">
                <FiGlobe />
              </Link>
            </button>
          </li>
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
