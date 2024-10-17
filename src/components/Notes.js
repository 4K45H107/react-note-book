import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row">
      <h2>Your notes</h2>
      {notes.map((note) => {
        return <NoteItem note={note} />;
      })}
    </div>
  );
};

export default Notes;
