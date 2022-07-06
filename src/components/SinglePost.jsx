import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deletePost, fetchPostById, editPost } from "api/posts";
import PostCard from "./PostCard";
import { useNavigate } from "react-router-dom";
export default function SinglePost({
  postList,
  setPostList,
  currentUser,
  token,
}) {
  const params = useParams();
  const [singlePost, setSinglePost] = useState({});
  const navigate = useNavigate();
  // console.log("PostList inside SP", postList);
  useEffect(() => {
    const postToDisplay = postList.filter((post) => {
      return post._id === params.id;
    });

    setSinglePost(postToDisplay[0]);
  }, []);
  console.log("single post", singlePost);
  return (
    <div>
      <PostCard post={singlePost} />
      {currentUser?._id === singlePost?.author?._id ? (
        <button
          onClick={() => {
            deletePost(token, singlePost?._id);
            navigate("/");
          }}
        >
          Delete
        </button>
      ) : null}
      {currentUser?._id === singlePost?.author?._id ? (
        <button
          onClick={() => {
            editPost(token, singlePost?._id, singlePost);
          }}
        >
          Edit
        </button>
      ) : null}
    </div>
  );
}
