import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/posts";
import SinglePost from "./SinglePost";
export default function Posts() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const result = await fetchPosts();
      setPostList(result);
    };
    getAllPosts();
  }, []);

  return (
    <div>
      {postList.map((post, index) => {
        return <SinglePost key={`Key: ${index}`} post={post} />;
      })}
    </div>
  );
}
