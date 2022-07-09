import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <div
      id="postList"
      onClick={() => {
        navigate(`${post._id}`);
      }}
    >
      <ul id="postUl">
        {post?.title ? (
          <>
            <li id="postTitle">Title: {post.title}</li>

            <li>
              <strong>Description:</strong> {post.description}
            </li>
            <li>
              <strong>Price:</strong> {post.price}
            </li>

            <li>
              <strong>Location:</strong> {post.location}
            </li>
            <li>
              <strong>Delivery:</strong> {post.willDeliver}
            </li>
          </>
        ) : null}
      </ul>
    </div>
  );
}
