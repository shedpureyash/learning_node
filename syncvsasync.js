const fs = require('fs')
//Synchronous
//readFileSync(file path, encoding type(default is buffer),flag(not mandatory))
// First the content of the file is readen then the other process gets executed
const data = fs.readFileSync('text.txt',"utf-8")
console.log(data)
console.log("After the data")
// output -  Hello everyone today is the beautiful day !!!
// After the data


////Asynchronous
//fs.readFile( filename, encoding, callback_function(error,data) )
const data1 = fs.readFile("text.txt",'utf-8',(err,data)=>{   
    console.log(data);
})
console.log("after the data")
// output
//after the data
//Hello everyone today is the beautiful day !!!
