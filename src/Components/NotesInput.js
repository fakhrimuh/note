import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleLimitEventHandler = this.onTitleLimitEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleLimitEventHandler(event) {
    const limit = 50;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value.slice(0, limit),
        limit: limit - event.target.value.slice(0, limit).length,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    this.setState((prevState) => {
      return {
        title: (prevState.title = ""),
        body: (prevState.body = ""),
        limit: (prevState.limit = 50),
      };
    });
  }

  render() {
    return (
      <form className="mb-3" onSubmit={this.onSubmitEventHandler}>
        <div>
          <p>Sisa Karakter: {this.state.limit}</p>
          <input
            type="text"
            placeholder="Judul"
            value={this.state.title}
            onChange={this.onTitleLimitEventHandler}
            className="form-control mb-3 w-50 bg-transparent text-light"
          />
        </div>
        <div>
          <textarea
            placeholder="Isi"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            className="form-control mb-3 w-50 bg-transparent text-light"
          />
        </div>
        <button className="btn btn-outline-light" type="submit">
          Tambah
        </button>
      </form>
    );
  }
}

export default NotesInput;
