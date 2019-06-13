import React from "react";

function Post(props) {
  return (
    <div>
      {props.post.user}
      <br />
      {props.post.content}
      <br />
      <br />
    </div>
  );
}

export default Post;
