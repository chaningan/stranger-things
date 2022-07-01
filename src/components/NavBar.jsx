import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts"> Post</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
}
