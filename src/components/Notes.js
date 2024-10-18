import React, { useEffect, useRef, useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import Addnotes from "./Addnotes";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(NoteContext);
  const { notes, getAllNotes, editNote } = context;
  const navigate = useNavigate();

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const ref = useRef(null);
  const refClose = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllNotes();
      // eslint-disable-next-line
    } else {
      navigate("/login");
    }
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = (e) => {
    refClose.current.click();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    e.preventDefault();
    props.showAlert("Note updated successfully", "success");
  };

  return (
    <>
      {localStorage.getItem("token") && <div className="row">
        <Addnotes showAlert={props.showAlert} />

        <button
          type="button"
          ref={ref}
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Hidden Button
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Note
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group my-3">
                    <label htmlFor="etitle">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      aria-describedby="etitle-help"
                      placeholder="Enter title"
                      value={note.etitle}
                      onChange={onChange}
                      minLength={3}
                      required
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="edescription">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      placeholder="Enter description"
                      value={note.edescription}
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="etag">Tag</label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      placeholder="Enter tag"
                      value={note.etag}
                      onChange={onChange}
                      minLength={1}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  ref={refClose}
                  className="btn btn-secondary d-none"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClick}
                  disabled={
                    note.etitle.length < 3 ||
                    note.edescription.length < 5 ||
                    note.etag.length < 1
                  }
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2>Your notes</h2>
        {notes.length === 0 && (
          <div className="container mx-3">No notes to display</div>
        )}
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              note={note}
              updateNote={updateNote}
              showAlert={props.showAlert}
            />
          );
        })}
      </div>}
    </>
  );
};

export default Notes;
