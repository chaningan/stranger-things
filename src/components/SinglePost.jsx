import React from "react";

export default function SinglePost({ post }) {
  return (
    <div>
      <ul>
        <li>Title: {post.title}</li>
        <li>Description: {post.description}</li>
        <li>Price: {post.price}</li>
        <li>Location: {post.location}</li>
        <li>Delivery: {post.willDeliver}</li>
      </ul>
    </div>
  );
}
