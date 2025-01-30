const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
    res.render("home.ejs");
});

// app.get("/ig/:username", (req, res) => {
//     const followers = ["jay", "Prince", "Arijit singh", "Atif aslam"];
//     let { username} = req.params;
//     res.render("instagram.ejs", {username, followers});
// });


app.use(express.static(path.join(__dirname, "public")));


app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs", {data });
    }else
    res.render("error.ejs");
   
});



app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    res.render("rolldice.ejs");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});