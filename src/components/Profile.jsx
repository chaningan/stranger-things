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
      // setToken(myLocalStorageToken);
    }
    if (myLocalStorageToken) {
      getMe();
    }
  }, []);
  return (
    <div>
      {currentUser?.messages?.map((message, index) => {
        return (
          <div key={`Key: ${index}`}>
            {" "}
            <MessageCard message={message} />
            {/* <ul message={message}>
              <li>{message.post.title}</li>
              <li> {message.content}</li>
            </ul> */}
            <button
              onClick={() => {
                // if (message.post.active) navigate(`/${message.post._id}`);
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

//messagesToMeCard
