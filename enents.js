let EventEmitter = require('events');
const { emit } = require('process');
let event =  new EventEmitter;
event.on('request',(req,res)=>{
    res.end("hello world")
})
event.emit('request')
