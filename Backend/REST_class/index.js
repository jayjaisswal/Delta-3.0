
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require('uuid');
const methodOverride = require("method-override");



app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Set the view engine to ejs
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "Kavita Kumari",
        content: "I am teacher and i love teaching"
    },
    {
        id: uuidv4(),
        username: "Jay Kumar",
        content: "Hello Friends! How is the Josh"
    },
    {
        id: uuidv4(),
        username: "Golu Kumar",
        content: "I Love Coding! I am currently doing Mtech from BITS Pilani"
    },
    {
        id:uuidv4(),
        username: "Devendra Chaudhary",
        content: "I M businessman and i love earning money!"
    },
];

// Route to render the index view
app.get("/posts", (req, res) => {
    res.render("index", { posts }); // Pass the posts data to the view
});

app.get("/posts/new", (req, res) => {
    res.render("new");
});

// app.post("/posts", (req, res) => {
//     console.log(req.body);
//     res.send("post request working");
// });

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id,  username, content });
    res.redirect("/posts");
});


app.patch("/posts/:id",(req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
} );

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit", {post});
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs",{post});
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");

})
 

app.listen(port, () => {
    console.log("Listening to port : " + port);
});


// http://localhost:8080/posts----> run this in local machine
