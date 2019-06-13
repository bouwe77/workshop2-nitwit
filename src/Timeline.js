import React from "react";

import Post from "./Post";

function Timeline(props) {
  return (
    <div>
      {props.posts.map(post => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default Timeline;
