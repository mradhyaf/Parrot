const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// // middleware
app.use(cors());
app.use(express.json());

// ROUTES

// create a post
app.post("/posts", async (req, res) => {
    try {
        const { description } = req.body;
        const newPost = await pool.query(
            "INSERT INTO posts(description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newPost.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// read all posts
app.get("/posts", async (req, res) => {
    try {
        const posts = await pool.query("SELECT * FROM posts");

        res.json(posts.rows);
    } catch (error) {
        console.error(error.message);
    }
});

// get a post with a specific id
app.get("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const post = await pool.query("SELECT * FROM posts WHERE id = $1", [
            id,
        ]);

        res.json(post.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// update the descriptions of a post with a specific id
app.put("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updatedPost = await pool.query(
            "UPDATE posts SET description = $1 WHERE id = $2",
            [description, id]
        );

        res.json("Post was updated");
    } catch (error) {
        console.error(error.message);
    }
});

// delete a post with a specific id
app.delete("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const post = await pool.query("DELETE FROM posts WHERE id = $1", [id]);

        res.json("Post was deleted");
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});
