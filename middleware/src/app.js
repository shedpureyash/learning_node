const express =require("express")
const app = express();

app.use(logger)

app.get('/',(req,res,next)=>{
    console.log('home page')
    res.send('home page')
    next()
})

app.get('/users',auth,(req,res,)=>{
    console.log('users page')
    res.send('users page')    
})

function logger(req,res,next){
    console.log(req.originalUrl)
    console.log('before')
    next()
    console.log('after')
}

function auth(req,res,next){
    if(req.query.auth === 'true')
    {
        req.auth = true
        next()
        return
    }   
    else
    console.log('no auth')   
}

app.listen(3000)