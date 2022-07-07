import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deletePost, fetchPostById, editPost, messagePost } from "api/posts";
import PostCard from "./PostCard";
import { useNavigate } from "react-router-dom";
import EditNewPost from "./EditNewPost";

export default function SinglePost({
  postList,
  setPostList,
  currentUser,
  token,
}) {
  const params = useParams();
  const [singlePost, setSinglePost] = useState({});
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  // console.log("PostList inside SP", postList);
  useEffect(() => {
    const postToDisplay = postList.filter((post) => {
      return post._id === params.id;
    });

    setSinglePost(postToDisplay[0]);
  }, []);

  return (
    <div>
      <PostCard post={singlePost} />
      {currentUser?._id === singlePost?.author?._id ? (
        <button
          onClick={() => {
            deletePost(token, singlePost?._id);
            navigate("/posts");
          }}
        >
          DELETE
        </button>
      ) : null}
      {currentUser?._id === singlePost?.author?._id ? (
        <button
          onClick={() => {
            editPost(token, singlePost?._id);
          }}
        >
          EDIT
        </button>
      ) : null}

      {currentUser?._id !== singlePost?.author?._id ? (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const result = await messagePost(token, singlePost?._id, message);
            navigate("/posts");
          }}
        >
          <input
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></input>
          <button type="submit">MESSAGE</button>
        </form>
      ) : null}
      {currentUser?._id === singlePost?.author?._id ? (
        <EditNewPost token={token} id={singlePost?._id} />
      ) : null}
    </div>
  );
}
