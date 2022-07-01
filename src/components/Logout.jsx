import React, { useState } from "react";

export default function Logout() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passConf, setPassConf] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createLogin(username);
          const newAccount = result.newAccount;
          const token = result.token;
          setCurrentUser(newAccount);
          setToken(token);
          localStorage.setItem("token", token);
          navigate("/");
        }}
      >
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <input value={passConf} onChange={(e) => setPassConf(e.target.value)} />

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}
