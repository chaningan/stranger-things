import React, { useState } from "react";
import { loginUser } from "api/auth";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  return (
    <div>
      <h4 id="loginTitle">Login Here:</h4>
      {errorMessage ? <h4 id="error">{errorMessage}</h4> : null}
      <form
        id="loginInfo"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(username, password);
          if (result.success) {
            setErrorMessage("You are now logged in!");
            localStorage.setItem("token", result.data.token);
            setToken(result.data.token);
            setPassword("");
            setUsername("");
          } else {
            const errorMessage = result.error.message;
            setErrorMessage(errorMessage);
          }
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
