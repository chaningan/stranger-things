import React, { useState } from "react";
import { createPost } from "../api/posts";
import { useNavigate } from "react-router-dom";

export default function CreateNewPost({ token }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <h4 id="newPostTitle">Add New Post:</h4>
      <form
        id="newPostInfo"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createPost(token, {
            title,
            description,
            price,
            location,
          });
          navigate("/posts");
        }}
      >
        <input
          id="userinput"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          id="userinput"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          id="userinput"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          id="userinput"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button id="createButton" type="submit">
          CREATE POST
        </button>
      </form>
    </div>
  );
}
