import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirms: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: HIDING IMPORTANT ELEMENT TO .ENV FILE
    const url = "http://localhost:5000/api/auth/createuser";
    // TODO: CONFIRM PASSWORD
    const { name, email, password, confirms } = credentials;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // SAVE the AUTH-TOKEN
      localStorage.setItem("token", json.authToken);
      // REDIRECT
      navigate("/");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };
  
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="container"
      style={{
        margin: "35px 0px",
        marginTop: "90px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            onChange={onChange}
            name="name"
            value={credentials.name}
            required
            minLength={3}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            name="email"
            value={credentials.email}
            required
            minLength={11}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={onChange}
            name="password"
            value={credentials.password}
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirms" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirms"
            onChange={onChange}
            name="confirms"
            value={credentials.confirms}
            required
            minLength={5}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
