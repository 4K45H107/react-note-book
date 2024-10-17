import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const Home = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;

  return (
    <div>
      <div className="container my-3">
        <h2>Add a note</h2>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <h2>Your notes</h2>
        {notes.map((note) => {
          return (
            <div>
              <div>{note.title}</div>
              <div>{note.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
