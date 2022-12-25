const express = require('express')
const app = express()
const port=4000
app.get('/',(req,res)=>{
    res.send("welcome to home page")
})
app.get('/about',(req,res)=>{
    res.write("<h1>welcome to about page</h1>")
    res.write("<h2>welcome to about page 2</h2>")
    res.send()
})
//sending json data
app.get('/contact',(req,res)=>{
    res.send([{
        id:1,
        name:"jai hanuman"},
        {id:2,
        name:"jai shree ram"}
    ])
})
app.listen(port, ()=>{
    console.log(`listening to port no ${port}`)
})