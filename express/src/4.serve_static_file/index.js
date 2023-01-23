//program to show static html file on webpage
const express = require('express')
const app= express();
const path = require('path')
// relative path -> .././
// absolute path -> __dirname

const staticpath = path.join(__dirname,"../public")
//using middleware
app.use(express.static(staticpath));
// app.get("/",(req,res)=>{
//     res.send("hello world")
// })
app.listen(4500,()=>{
    console.log("listinng to port")
})