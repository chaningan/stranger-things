import React, { useState } from "react";
import createUser from "api/users";
import { useNavigate } from "react-router-dom";

export default function Register({ setToken, setNewUser }) {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const [confirmation, setConfirmation] = useState("");

  return (
    <div>
      <h4>Register Here:</h4>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createUser(username, password);
          setToken(result.data.token);
          localStorage.setItem("token", result.data.token);
          navigate("/");
          console.log(result);
        }}
      >
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input
          placeholder="Confirm Password"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
        /> */}
        <button type="submit"> Register </button>
        {/* conditionally submit based on password and confirmation matching */}
      </form>
    </div>
  );
}
