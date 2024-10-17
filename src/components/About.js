import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";

const About = () => {
  const cntx = useContext(NoteContext);

  useEffect(() => {
    cntx.update();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      I am {cntx.state.name} and my age is {cntx.state.age}
    </div>
  );
};

export default About;
