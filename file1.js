let http =  require('http')
let fs = require('fs')
http.createServer((req,res)=>{
 fs.readFile('./text.txt','utf-8',(err,data)=>{
    console.log(data)
    res.end(data);
 })
}).listen(4000)