import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // GET ALL NOTES
  const getAllNotes = async () => {
    // API Call
    const url = `${host}/api/notes/getallnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcxMDNiYTYwNmVlYTgwZGJhNjI0ODQwIn0sImlhdCI6MTcyOTExNzA5NH0.0i0dhPD_U2tm98mdVNZJ3QSIVqlY63_zCGHxkaeux5k",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // ADD A NOTE
  const addNote = async (note) => {
    // API Call
    const url = `${host}/api/notes/addnote`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: note.title,
        description: note.description,
        tag: note.tag,
      }),
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcxMDNiYTYwNmVlYTgwZGJhNjI0ODQwIn0sImlhdCI6MTcyOTExNzA5NH0.0i0dhPD_U2tm98mdVNZJ3QSIVqlY63_zCGHxkaeux5k",
      },
    });
    const json = await response.json();
    setNotes(notes.concat(json));
  };

  // DELETE A NOTE
  const deleteNote = async (id) => {
    // API Call
    const url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcxMDNiYTYwNmVlYTgwZGJhNjI0ODQwIn0sImlhdCI6MTcyOTExNzA5NH0.0i0dhPD_U2tm98mdVNZJ3QSIVqlY63_zCGHxkaeux5k",
      },
    });
    const json = await response.json();
    console.log(json);

    let newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Edit a note
  //"6710422d88b9586f113f8627"
  const editNote = async (id, title, description, tag) => {
    // API Call
    const url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ id, title, description, tag }),
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcxMDNiYTYwNmVlYTgwZGJhNjI0ODQwIn0sImlhdCI6MTcyOTExNzA5NH0.0i0dhPD_U2tm98mdVNZJ3QSIVqlY63_zCGHxkaeux5k",
      },
    });
    const json = response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));

    // logic to edit client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
