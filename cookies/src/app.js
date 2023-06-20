const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
app.use(cookieParser())

const port = 5500

let validatecookie = (req,res,next)=>{
    let {cookies} = req
    if('session_id' in cookies)
        if(cookies.session_id===12845)
        console.log(true)
    else
        console.log(false)    
    next()
}
app.get("/signin",validatecookie,(req,res)=>{
    res.cookie('session_id','12845')
    res.status(200).json({'msg':'cookie set'})
})
app.listen(port,()=>
console.log(`listening to port ${port}`))

