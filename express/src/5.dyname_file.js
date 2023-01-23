//program to show static html file on webpage
const express = require('express')
const app= express();
const path = require('path')
// relative path -> .././
// absolute path -> __dirname

const staticpath = path.join(__dirname,"../public")
const path1 = path.join(__dirname,"/template/views")
//using middleware
app.set("view engine","hbs");
//views set to path1 to show the location of index.hbs
app.set("views",path1)
//app.use(express.static(staticpath));
app.get("/",(req,res)=>{
    res.render("index",{
        props:"yash shedpure"
    })
})
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.listen(4500,()=>{
    console.log("listinng to port")
})
