import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/posts";
import PostCard from "./PostCard";
import SearchBar from "./SearchBar";

export default function PostList({ postList, setPostList }) {
  useEffect(() => {
    const getAllPosts = async () => {
      const result = await fetchPosts();
      setPostList(result.data.posts);
    };
    getAllPosts();
  }, []);

  return (
    <div>
      <SearchBar />

      {postList.map((post, index) => {
        return <PostCard key={`Key: ${index}`} post={post} />;
      })}
    </div>
  );
}
