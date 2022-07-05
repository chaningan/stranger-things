import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "api/posts";
import PostCard from "./PostCard";

export default function SinglePost({ postList, setPostList }) {
  const params = useParams();
  const [singlePost, setSinglePost] = useState({});

  console.log("PostList inside SP", postList);
  useEffect(() => {
    const postToDisplay = postList.filter((post) => {
      return post._id === params.id;
    });

    setSinglePost(postToDisplay[0]);
  }, []);

  return (
    <div>
      <PostCard post={singlePost} />
    </div>
  );
}
