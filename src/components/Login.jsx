import React, { useState } from "react";
import { loginUser } from "api/auth";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  return (
    <div>
      <h4 id="loginTitle">Login Here:</h4>
      <form
        id="loginInfo"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(username, password);
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          setPassword("");
          setUsername("");
        }}
      >
        <input
          id="userinput"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          id="userinput"
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="loginButton" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
}
