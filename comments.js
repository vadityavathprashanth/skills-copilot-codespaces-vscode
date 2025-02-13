// Create web server
// 1. Create a web server
// 2. Create a route for "/comments"
// 3. Return a list of comments
// 4. Create a route for "/comments/new"
// 5. Add a new comment to the list of comments
// 6. Redirect to "/comments"
// 7. Create a route for "/comments/:id"
// 8. Return a specific comment
// 9. Create a route for "/comments/:id/edit"
// 10. Return a form to edit a specific comment
// 11. Create a route for "/comments/:id/update"
// 12. Update a specific comment
// 13. Redirect to "/comments"
// 14. Create a route for "/comments/:id/delete"
// 15. Delete a specific comment
// 16. Redirect to "/comments"
// 17. Start the server and listen on port 3000

// Load the express module
const express = require("express");

// Create an express application
const app = express();

// Set the view engine for the express application
app.set("view engine", "pug");

// Set the path to the views for the express application
app.set("views", "./views");

// Create a list of comments
const comments = [
  { id: 1, author: "John Doe", body: "Comment 1" },
  { id: 2, author: "Jane Doe", body: "Comment 2" },
  { id: 3, author: "Alice Doe", body: "Comment 3" },
];

// Create a route for "/comments"
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

// Create a route for "/comments/new"
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

// Create a route for "/comments"
app.post("/comments", (req, res) => {
  const { author, body } = req.body;
  const id = comments.length + 1;
  comments.push({ id, author, body });
  res.redirect("/comments");
});

// Create a route for "/comments/:id"
app.get("/comments/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const comment = comments.find((comment) => comment.id
    === id);
    res.render("comments/show", { comment });
});


