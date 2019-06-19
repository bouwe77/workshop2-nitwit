import React from "react";

import Post from "./Post";

function Timeline(props) {
  return (
    <div>
      {props.posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

export default Timeline;
