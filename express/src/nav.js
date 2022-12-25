const express = require('express')
const app = express()
const port=4000
app.get('/',(req,res)=>{
    res.send("welcome to home page")
})
app.get('/about',(req,res)=>{
    res.status(200).send("welcome to about page")
})
app.get('/contact',(req,res)=>{
    res.send("welcome to contact page")
})
app.listen(port, ()=>{
    console.log(`listening to port no ${port}`)
})