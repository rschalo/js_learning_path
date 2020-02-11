var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
var posts = [
  { title: "Post 1", author: "Susy" },
  { title: "My adorable pet bunny", author: "Charlie" },
  { title: "But have you seen Rusty?", author: "Colt" }
];

app.get("/", function(req, res) {
  res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("love.ejs", { thingVar: thing });
});

app.get("/posts", function(req, res) {
  res.render("post.ejs", { posts: posts });
});

app.post("/addpost", function(req, res) {
  var newtitle = req.body.newtitle;
  var newauthor = req.body.newauthor;
  posts.push({ title: newtitle, author: newauthor });
  res.redirect("/posts");
});

app.listen("3000", function() {
  console.log("Server is listening");
});
