import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="btn btn-outline-danger mx-2"
      onClick={() => onDelete(id)}
    >
      Hapus
    </button>
  );
}

export default DeleteButton;
