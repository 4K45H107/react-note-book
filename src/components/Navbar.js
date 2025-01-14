import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to={localStorage.getItem("token") ? "/" : "/login"}
        >
          Notebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {localStorage.getItem("token") ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          ) : (
            <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
          )}
          {localStorage.getItem("token") === null ? (
            <form className="d-flex">
              {!(location.pathname === "/login") && (
                <Link className="btn btn-light mx-1" to="/login" role="button">
                  Login
                </Link>
              )}
              {!(location.pathname === "/signup") && (
                <Link className="btn btn-light mx-1" to="/signup" role="button">
                  Signup
                </Link>
              )}
            </form>
          ) : (
            <form className="d-flex">
              <button
                className="btn btn-light mx-1"
                role="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
