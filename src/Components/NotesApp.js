import React from "react";
import NotesList from "./NotesList";
import { getData } from "../Utils/Data";
import NotesInput from "./NotesInput";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="container text-white">
        <div className="row">
          <div class="col-md-4"></div>
          <div className="col-md-7">
            <h3>Buat Catatan</h3>
            <NotesInput addNotes={this.onAddNotesHandler} />
          </div>
        </div>
        <h3>Catatan</h3>
        <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NotesApp;
