//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
// DEFINITION: Express is a popular unopinionated, minimalist web framework, written in JavaScript and hosted within the Node.js runtime environment. Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.[3] It has been called the de facto standard server framework for Node.js.[4]. 
// from https://en.wikipedia.org/wiki/Express.js

// Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js and Deno (alpha). from https://www.npmjs.com/package/mongoose

// initializing objects with require, later this section will be import modules
const express = require("express");
const mongoose = require("mongoose"); 


const app = express();

// Built-In Middleware 
// https://expressjs.com/en/guide/using-middleware.html#using-middleware
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
//Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware
// An Express application can use the following types of middleware:

// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine", "ejs");

// Database Server MongoDb Setup

mongoose
  .connect("mongodb://127.0.0.1:27017/from-scratch", { useNewUrlParser: true })
  .then(() => console.log("Connected! to mongodb port 27017"));

// Defining a Model
// Models are defined through the Schema interface.

const Schema = mongoose.Schema;

const BlogPost = new Schema({
  title: String,
  message: String,
  date: Date,
});

// Accessing a Model
// Once we define a model through mongoose.model('ModelName', mySchema), we can access it through the same function

// const MyModel = mongoose.model('ModelName');
// Or just do it all at once: BlogPost (SINGULAR) mean the collection's name is blogposts PLURAL!!!!

const BlogPostModel = mongoose.model("BlogPost", BlogPost);

// routes based on URL: The url is the full URL without the server, protocol or port. For a typical URL, this means everything after and including the third forward slash.
// URL path the same as route definition!!!

app.get("/", (req, res) => {
  res.send("this is root route");
});

app.get("/api/posts", (req, res) => {
  BlogPostModel.find()
    .then((blog) => res.json(blog))
    .catch((error) => res.send(error));
});
app.get("/api/tmp", (req, res) => {
  db.find()
    .then((data) => res.render('form', {recipe:data}))
    .catch((error) => res.send(error));
});

app.post("/api/posts", (req, res) => {
  // schema title, message, date
  let title = req.body.title;
  let message = req.body.message;
  const blog = new BlogPostModel({
    title: title,
    message: message,
    date: new Date(),
  });
  BlogPostModel.create(blog)
    .then((newBlog) => res.status(201).json(newBlog))
    .catch((error) => res.send(error));

  // res.send("post route hit, new post created!!")
});
app.get("/api/posts/:id", (req, res) => {
  const search = req.params.id;
  BlogPostModel.findById(search)
    .then((blog) => res.json(blog))
    .catch((error) => res.send(error));
});
app.put("/api/posts/:id", (req, res) => {
  const search = req.params.id;
  const message = req.body;
  BlogPostModel.findOneAndUpdate({ _id: search }, message, { new: true })
    .then((blog) => res.json(blog))
    .catch((error) => res.send(error));
});
app.delete("/api/posts/:id", (req, res) => {
  BlogPostModel.deleteOne({ id: req.params.id })
    .then(() => res.json("we deleted it!!"))
    .catch((error) => res.send(error));
});

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`Server started, listening on port ${PORT}`);
});

const createItem = async () => {
    const firstBlog = new BlogPostModel({
      title: "First blog",
      message: "first message",
      date: new Date(),
    });
    const secondBlog = new BlogPostModel({
      title: "Second blog",
      message: "second message",
      date: new Date(),
    });
    await firstBlog.save();
    await secondBlog.save();
  };
  // ************ uncomment this only one time
  
  // createItem();