let http = require("http")
http.createServer((req,res)=>{
    res.write("hello world")
    let data= req.url
    res.write(data)
    res.end()
}).listen(4000)