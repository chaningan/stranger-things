import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "api/posts";

export default function PostCard({ post }) {
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
