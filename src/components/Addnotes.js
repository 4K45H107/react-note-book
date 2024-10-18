import React from "react";
import { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

const Addnotes = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
  };

  return (
    <div className="container">
      <h2>Add a note</h2>
      <form>
        <div className="form-group my-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="title-help"
            placeholder="Enter title"
            value={note.title}
            onChange={onChange}
            minLength={3}
            required
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter description"
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            placeholder="Enter tag"
            value={note.tag}
            onChange={onChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
          disabled={note.title.length < 3 || note.description.length < 5}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Addnotes;
