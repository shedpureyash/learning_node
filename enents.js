let EventEmitter = require('events');
let event =  new EventEmitter;
event.on('request',(req,res)=>{
    res.end("hello world")
})