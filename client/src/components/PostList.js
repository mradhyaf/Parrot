import React, { Fragment, useEffect, useState } from "react";
import Post from "./Post";

function PostList() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/posts");
      const jsonData = await response.json();

      setPosts(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
      });

      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <div>
        <ul className="list-group list-group-flush">
          {posts.map((post) => (
            <li className="list-group-item" key={post.id}>
              <Post post={post} handleDeletePost={deletePost} />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default PostList;
