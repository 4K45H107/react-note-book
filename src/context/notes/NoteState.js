import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6710422c88b9586f113f8621",
      user: "67103ba606eea80dba624840",
      title: "First Note",
      description: "This is a very good note",
      tag: "personal",
      date: "2024-10-16T22:46:04.573Z",
      __v: 0,
    },
    {
      _id: "6710422d88b9586f113f8623",
      user: "67103ba606eea80dba624840",
      title: "First Note",
      description: "This is a very good note",
      tag: "personal",
      date: "2024-10-16T22:46:05.044Z",
      __v: 0,
    },
    {
      _id: "6710422d88b9586f113f8625",
      user: "67103ba606eea80dba624840",
      title: "First Note",
      description: "This is a very good note",
      tag: "personal",
      date: "2024-10-16T22:46:05.214Z",
      __v: 0,
    },
    {
      _id: "6710422d88b9586f113f8627",
      user: "67103ba606eea80dba624840",
      title: "First Note",
      description: "This is a very good note",
      tag: "personal",
      date: "2024-10-16T22:46:05.365Z",
      __v: 0,
    },
    {
      _id: "6710422d88b9586f113f8629",
      user: "67103ba606eea80dba624840",
      title: "First Note",
      description: "This is a very good note",
      tag: "personal",
      date: "2024-10-16T22:46:05.539Z",
      __v: 0,
    },
    {
      _id: "6710422d88b9586f113f862b",
      user: "67103ba606eea80dba624840",
      title: "First Note",
      description: "This is a very good note",
      tag: "personal",
      date: "2024-10-16T22:46:05.692Z",
      __v: 0,
    },
    {
      _id: "6710422d88b9586f113f862d",
      user: "67103ba606eea80dba624840",
      title: "First Note",
      description: "This is a very good note",
      tag: "personal",
      date: "2024-10-16T22:46:05.874Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
