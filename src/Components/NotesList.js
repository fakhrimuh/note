import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete }) {
  return (
    <div>
      {notes.length === 0 ? (
        <p className="fs-4">Tidak ada catatan</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {notes.map((note) => {
            return (
              <NotesItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                {...note}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default NotesList;
