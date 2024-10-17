import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import Addnotes from "./Addnotes";

const Notes = () => {
  const context = useContext(NoteContext);
  // eslint-disable-next-line
  const { notes } = context;

  return (
    <div className="row">
      <Addnotes />
      <h2>Your notes</h2>
      {notes.map((note) => {
        return <NoteItem key={note._id} note={note} />;
      })}
    </div>
  );
};

export default Notes;
