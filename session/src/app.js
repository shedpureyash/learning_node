const express = require("express")
const app = express()
const session = require("express-session")

app.use(session({
    secret:"secrey-key",
    resave:false,
    saveUninitialized:false,
}))

app.get("/",(req,res)=>{
    console.log(req.sessionID)
    if(!req.session.value)
        req.session.value=1
    else
    req.session.value+=1
    res.send(`${req.session.value}`)
   
})

app.listen(1112,()=>{
    console.log("console to port 1112")
})