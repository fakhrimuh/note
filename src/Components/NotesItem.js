import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";

function NotesItem({ title, body, createdAt, id, onDelete, onArchive }) {
  return (
    <div className="col my-2">
      <div className="card h-100 bg-transparent border-light">
        <div className="card-body">
          <NotesItemBody title={title} createdAt={createdAt} body={body} />
        </div>
        <div className="card-footer border-transparent">
          <DeleteButton id={id} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default NotesItem;
