import React from "react";
import Post from "./Post";
import { userPosts } from "@constants";

const Posts = () => {
  return (
    <div className="posts pb-4">
      {userPosts.map((post, index) => (
        <Post data={post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
