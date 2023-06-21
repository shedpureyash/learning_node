const express = require("express")
const app = express()
const router = require("../routes/router.js")
app.use(router)
// //create a new router
// const router = new express.Router()

// // register a router(using in middleware)
// app.use(router)

// // defining th router
// router.get('/',(req,res)=>{
//     res.send("hello world")
// })

app.listen(1234)