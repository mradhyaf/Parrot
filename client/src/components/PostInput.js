import React, { Fragment, useState } from "react";

function PostInput() {
  const [description, setDescription] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <div className="primary py-5">
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="btn btn-success">Post</button>
        </form>
      </div>
    </Fragment>
  );
}

export default PostInput;
