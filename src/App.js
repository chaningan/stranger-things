import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Home,
  Logout,
  Messages,
  NavBar,
  PostList,
  Profile,
  Users,
  Register,
} from "components";

export default function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  console.log("Token", token);
  console.log("Current User", currentUser);

  useEffect(() => {
    const myLocalStorageToken = localStorage.getItem("token");
    console.log("My token from local storage is:", myLocalStorageToken);
    if (myLocalStorageToken) {
      setToken(myLocalStorageToken);
    }
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        {/* <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/messages" element={<Messages />} /> */}
        <Route path="/posts" element={<PostList />} />
        {/* /* <Route path="/profile" element={<Profile />} />
         */}
        <Route path="/register" element={<Register setToken={setToken} />} />
      </Routes>
    </div>
  );
}
