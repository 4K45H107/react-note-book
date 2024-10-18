import React from "react";
import Notes from "./Notes";

const Home = (props) => {
  return (
    <div>
      <div
        className="container"
        style={{
          margin: "35px 0px",
          marginTop: "90px",
        }}
      >
        <Notes showAlert={props.showAlert} />
      </div>
    </div>
  );
};

export default Home;
