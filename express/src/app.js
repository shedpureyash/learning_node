const express  =require('express')
const app = express()

//app.get(route,callback)
app.get("/" , (req,res)=>{
    res.send("hello from the express")
})
app.get("/about" , (req,res)=>{
    res.send("this is about page")
})
app.listen(4000, ()=>{
    console.log("listing at port 4000")
})