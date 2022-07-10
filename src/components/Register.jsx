import React, { useState } from "react";
import createUser from "api/users";
import { useNavigate } from "react-router-dom";

export default function Register({ setToken, setNewUser }) {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h4 id="registerTitle">Register Here:</h4>

      <form
        id="reginfo"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createUser(username, password);
          setToken(result.data.token);
          localStorage.setItem("token", result.data.token);
          navigate("/posts");
        }}
      >
        <input
          id="userinput"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          id="userinput"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input
          placeholder="Confirm Password"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
        /> */}
        <button id="regButton" type="submit">
          {" "}
          REGISTER{" "}
        </button>
        {/* conditionally submit based on password and confirmation matching */}
      </form>
    </div>
  );
}
