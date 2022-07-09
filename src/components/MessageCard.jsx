import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function MessageCard({ message }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`${message.post._id}`);
      }}
    >
      <ul id="messageContent">
        {message?.post ? (
          <>
            <li id="msgPostTitle">Title: {message.post.title}</li>
            <li id="msg">Message: {message.content}</li>
          </>
        ) : null}
      </ul>
    </div>
  );
}
