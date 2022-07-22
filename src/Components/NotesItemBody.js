import React from "react";
import { showFormattedDate } from "../Utils/Data";

function NotesItemBody({ title, body, createdAt }) {
  return (
    <div className="notesItemBody">
      <h3> {title} </h3>
      <time className="text-muted" dateTime={createdAt}>
        {showFormattedDate(createdAt)}
      </time>
      <p className="notesContent"> {body} </p>
    </div>
  );
}

export default NotesItemBody;
