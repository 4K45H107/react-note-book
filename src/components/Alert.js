import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      <div
        className={`alert fixed-top alert-${props.alert.type} alert-dismissible fade show`}
        style={{
          margin: "35px 0px",
          marginTop: "56px",
        }}
        role="alert"
      >
        <strong> {capitalize(props.alert.type)} </strong>
        {props.alert.msg}
      </div>
    </div>
  );
};

export default Alert;
