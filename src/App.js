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
  Login,
  SinglePost,
} from "components";
import { fetchMe } from "api/auth";

export default function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [postList, setPostList] = useState([]);

  console.log("Token", token);
  console.log("Current User", currentUser);

  useEffect(() => {
    const myLocalStorageToken = localStorage.getItem("token");

    async function getMe() {
      const result = await fetchMe(myLocalStorageToken);
      setCurrentUser(result.data);
      setToken(myLocalStorageToken);
    }
    if (myLocalStorageToken) {
      getMe();
    }
  }, [token]);

  return (
    <div>
      <NavBar />
      <Routes>
        {/* <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/messages" element={<Messages />} /> */}
        <Route
          path="/posts"
          element={<PostList setPostList={setPostList} postList={postList} />}
        />
        {/* /* <Route path="/profile" element={<Profile />} />
         */}
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route
          path="/posts/:id"
          element={<SinglePost setPostList={setPostList} postList={postList} />}
        />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
    </div>
  );
}
