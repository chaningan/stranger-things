import { Routes, Route } from "react-router-dom";
import {
  Home,
  Logout,
  Messages,
  NavBar,
  Posts,
  Profile,
  Users,
} from "components";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/messages" element={<Messages />} /> */}
        <Route path="/posts" element={<Posts />} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} /> */}
      </Routes>
    </div>
  );
}
