import React, { useState } from "react";
import { editPost } from "../api/posts";
import { useNavigate } from "react-router-dom";

export default function EditNewPost({ token, id }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <form
        id="editPostInfo"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await editPost(token, id, {
            title,
            description,
            price,
            location,
          });
          console.log("result", result);
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

        <button id="subButton">SUBMIT</button>
      </form>
    </div>
  );
}
