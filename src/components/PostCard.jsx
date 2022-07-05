import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function PostCard({ post }) {
  const navigate = useNavigate();

  console.log("THE POST IN THE CARD", post);

  return (
    <div
      onClick={() => {
        navigate(`${post._id}`);
      }}
    >
      <ul>
        {post?.title ? (
          <>
            <li>Title: {post.title}</li>
            <li>Description: {post.description}</li>
            <li>Price: {post.price}</li>
            <li>Location: {post.location}</li>
            <li>Delivery: {post.willDeliver}</li>
          </>
        ) : null}
      </ul>
    </div>
  );
}
