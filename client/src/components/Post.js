import React from "react";
import PostEdit from "./PostEdit";

function Post({ handleDeletePost, post }) {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text mt-2">{post.description}</p>
      </div>
      <div className="card-footer text-end">
        <PostEdit post={post} />
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => handleDeletePost(post.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Post;
