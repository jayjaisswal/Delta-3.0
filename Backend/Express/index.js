const express = require("express");
const app = express();

// console.dir(app); 


let port = 3000;
app.listen(port, ()=> {
   console.log(`App is listening on ${port}`); 
});

// app.use((req, res)=>{
//     // console.log(req);
//     console.log("Request received");
//     // res.send("This is a basic response");
//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     // });
//     let code = "<h1>Fruits</h1><ul><li>Orange</li><li>Mango</li></ul>"
//     res.send(code);
// });

//routing
app.get("/",(req, res)=>{
    res.send("You contacted root path");
});

// app.get("/apple",(req, res)=>{
//     res.send("You contacted apple path");
// });

// app.get("/Orange",(req, res)=>{
//     res.send("You contacted Orange path");
// });

// app.get("*", (req, res)=>{
//     res.send("this path does not exit");
// });

// app.post("/", (req, res) => {
//     res.send("you sent a post request");
// }); 

//path parameters

app.get("/:username/:id",(req, res)=>{
    // console.log(req.params);
    // res.send("You contacted root path");
    let {username, id} = req.params;
    let htmlstr = `<h1>welcome to the page of @${username}.</h1?`;
    res.send(htmlstr);
});

// query string
app.get("/search",(req, res) => {
    console.log(req.query);
});

