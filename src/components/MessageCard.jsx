import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function MessageCard({ message }) {
  const navigate = useNavigate();

  return (
    <div
      id="messageCard"
      onClick={() => {
        navigate(`${message.post._id}`);
      }}
    >
      <ul>
        {message?.post ? (
          <>
            <li>{message.content}</li>
            <li>Title: {message.post.title}</li>
          </>
        ) : null}
      </ul>
    </div>
  );
}
