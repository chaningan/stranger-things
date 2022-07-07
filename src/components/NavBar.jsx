import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ setToken }) {
  return (
    <nav>
      <h3 id="title">Stranger's Things</h3>
      <Link className="link" to="/home">
        Home{" "}
      </Link>
      <Link className="link" to="/posts">
        Posts{" "}
      </Link>
      <Link className="link" to="/createPost">
        Create Post{" "}
      </Link>
      <Link className="link" to="/profile">
        Profile{" "}
      </Link>
      <Link className="link" to="/Register">
        Register{" "}
      </Link>
      <Link className="link" to="/login">
        Login{" "}
      </Link>

      <button
        id="logoutButton"
        onClick={() => {
          setToken(null);
          localStorage.clear();
        }}
      >
        {" "}
        Logout{" "}
      </button>
    </nav>
  );
}
