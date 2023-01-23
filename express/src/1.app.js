// initial code for express
let express = require('express')
let app = express();

// CRUD operations in API *get-read *post-create *put-update *delete-delete

//The get function has  parameters - request(req) and response(res)
//The request object(req) represents the http request and has 
//properties for the request query string, parameters, body, HHTP headers EventCounts.apply

// The response object represents the http response  that the 
//express app sends when it receives an http request.

app.get("/",(req,res)=>{
    res.send("hello from the home page")
})

app.get("/about",(req,res)=>{
    res.send("hello from tne about")
})

app.get("/contact",(req,res)=>{
    res.send("hello from tne contact")
})
app.listen(8000,()=>{
    console.log("listening tne port at 8000")
})