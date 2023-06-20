const express = require("express")
require("./db/conn")
const Student = require("./models/students")
const app = express()
app.use(express.json())
const port = process.env.PORT || 3000

// app.post("/students",(req,res)=>{
//     console.log(req.body)
//     const user = new Student(req.body)
//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
// })

app.post("/students",async(req,res) =>{
    try{
    console.log(req.body)
    const user = new Student(req.body)
    const value = await user.save()
    res.status(201).send(value)
    }catch(e){
        res.status(400).send(e)
    }

})

app.get("/students", async(req,res)=>{
    try{
        const studentdata = await Student.find()
        if(!studentdata)
            throw("no data found")
        else    
            res.status(200).send(studentdata)
    }catch(e){
        res.status(500).send(e)
    }
})

app.get("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(_id)
        const data = await Student.findById({_id:_id})
        console.log(data)
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

app.get("/",(req,res)=>{
    res.send("hello from the server")
})

//upadte student data 
app.patch("/students/:id",async (req,res)=>{
    try{
    const _id  = req.params.id;
    const docs =  await Student.findByIdAndUpdate({_id:_id},req.body,{new:true}) 
    res.send(docs)
    }catch(e){
        res.status(400).send(e);
    }
})

// delete the stusdent data
app.delete("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const deleteddata = await Student.findByIdAndDelete({_id:_id}) 
        if(!deleteddata)
        return res.status(400).send()
        else
        res.send(deleteddata)
    }catch(e){
        res.status(500).send(e)
    }

})
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`)
})