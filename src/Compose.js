import React, { useState } from "react";

function Compose(props) {
  const [content, setContent] = useState("");

  function changeContent(event) {
    const textbox = event.target;
    setContent(textbox.value);
  }

  function submit(event) {
    event.preventDefault();
    props.addPost(content);
    setContent("");
  }

  return (
    <form onSubmit={submit}>
      <textarea onChange={changeContent} value={content} />
      <button onClick={submit}>OK</button>
    </form>
  );
}

export default Compose;
