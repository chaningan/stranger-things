import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/posts";
import PostCard from "./PostCard";
// Credit to https://blog.logrocket.com/create-search-bar-react-from-scratch/
// for help with implementing a search bar.
export default function PostList({ postList, setPostList }) {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const getAllPosts = async () => {
      const result = await fetchPosts();
      setPostList(result.data.posts);
    };
    getAllPosts();
  }, []);

  return (
    <div id="searchInfo">
      <strong>Search Here: </strong>
      <input
        id="searchBar"
        placeholder="Search posts"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {postList
        .filter((post) => {
          if (searchTerm === "") {
            return post;
          } else if (
            post.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            post.description
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return post;
          }
        })
        .map((post, index) => {
          return <PostCard key={`Key: ${index}`} post={post} />;
        })}
    </div>
  );
}
