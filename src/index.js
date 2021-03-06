import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

import Header from "./Header";
import Timeline from "./Timeline";
import Compose from "./Compose";

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(content) {
    const prevPosts = posts;

    let newPost = { user: "bouwe", content };
    setPosts([newPost, ...posts]);

    newPost = { content };
    // Post the new ToDo to the API.
    axios
      .post("https://nitwit-api.azurewebsites.net/users/bouwe/posts", newPost)
      .catch(error => {
        setPosts(prevPosts);
        console.log(error, error.request, error.response, error.config);
      });
  }

  useEffect(() => {
    function getPosts() {
      axios
        .get("https://nitwit-api.azurewebsites.net/users/bouwe/timeline")
        .then(res => {
          setPosts(res.data);
        })
        .catch(error => {
          console.log(error, error.request, error.response, error.config);
        });
    }
    getPosts();
  }, [setPosts]);

  return (
    <div className="App">
      <Header />
      <Compose addPost={addPost} />
      <Timeline posts={posts} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
