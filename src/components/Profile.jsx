import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchMe } from "api/auth";
import MessageCard from "./MessageCard";
export default function Profile({ currentUser, setCurrentUser, setToken }) {
  console.log(currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    const myLocalStorageToken = localStorage.getItem("token");

    async function getMe() {
      const result = await fetchMe(myLocalStorageToken);
      setCurrentUser(result.data);
    }
    if (myLocalStorageToken) {
      getMe();
    }
  }, []);
  return (
    <div>
      {currentUser?.messages?.map((message, index) => {
        return (
          <div id="postList" key={`Key: ${index}`}>
            {" "}
            <MessageCard message={message} />
            <button
              id="viewPostButton"
              onClick={() => {
                navigate(`/posts/${message.post._id}`);
              }}
            >
              View Post
            </button>
          </div>
        );
      })}
    </div>
  );
}
