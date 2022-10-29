import React from "react";
import Navigation from "./Navigation";
import ThemeContext from "../contexts/ThemeContext";
import PropTypes from "prop-types";

export default function NoteHeader({ logout }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark" ? "note-app__header" : "note-app__header__light"
      }
    >
      <img src="./colordots.svg" alt="color dots" width="80" />
      <Navigation logout={logout} />
    </div>
  );
}

NoteHeader.propTypes = {
  logout: PropTypes.func.isRequired,
};
