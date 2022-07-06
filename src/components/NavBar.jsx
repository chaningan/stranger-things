import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ setToken }) {
  return (
    <nav>
      <Link to="/home">Home </Link>
      <Link to="/posts">Post </Link>
      <Link to="/createPost">Create Post </Link>
      <Link to="/profile">Profile </Link>
      <Link to="/Register">Register </Link>
      <Link to="/login">Login </Link>

      <button
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
