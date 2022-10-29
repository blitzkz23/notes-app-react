import React from "react";
import { PropTypes } from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ConfirmationSwal = withReactContent(Swal);

export default function NoteItemActionDelete({ id, deleteNote }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <React.Fragment>
      <button
        className="note-item__delete-button"
        onClick={() =>
          ConfirmationSwal.fire({
            title: "Do you really want to delete this note?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
          }).then((result) => {
            if (result.isConfirmed) {
              deleteNote(id);
            } else if (result.isDismissed) {
              // do nothing
            }
          })
        }
      >
        {locale === "id" ? "Hapus" : "Delete"}
      </button>
    </React.Fragment>
  );
}

NoteItemActionDelete.propTypes = {
  id: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
