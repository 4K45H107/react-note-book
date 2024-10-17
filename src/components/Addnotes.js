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
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter description"
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            placeholder="Enter tag"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Addnotes;
