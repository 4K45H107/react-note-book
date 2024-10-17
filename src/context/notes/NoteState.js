import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const demoState = {
    name: "Akash",
    age: 24,
  };

  const [state, setState] = useState(demoState);

  const update = () => {
    setTimeout(() => {
      setState({
        name: "Akash batash",
        age: 24,
      });
    }, 1000);
  };

  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
