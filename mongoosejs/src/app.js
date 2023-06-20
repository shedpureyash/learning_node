const mongoose  = require("mongoose");
mongoose.connect("mongodb://localhost:27017/yashdb")
.then(()=>console.log("connection successful"))
.catch((err)=> console.log(err));

// schema
// A Mongoose schema defines the structure of the document,
// default values, validators, etc

//playlistSchema is object or instance
const playlistSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ctype: String,
    active: Boolean,
    date: {
        type:Date,
        default: Date.now
    }
})

// A mongoose model is a wrapper on the mongoose schema. A mongoose 
// schema defines the structure of the document, deault values,
// validators , etc., whereas a Mongoose model provides an 
//interface to the database for creating, querying, updating, 
// deleting records, etc.

//collection creation
const Playlist = new mongoose.model("Plalist",playlistSchema)

// insert document
// async function adddata(){
//     try{
//     const reactplaylist = new Playlist(
//         {
//             name:"NodeJS",
//             ctype:"Backend",
//             active: true
//         })
//     const result =  await reactplaylist.save()
//     console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }

// adddata()

// insert many documents
// async function adddata(){
//     try{
//     const jsplaylist = new Playlist(
//         {
//             name:"JS",
//             ctype:"fullstack",
//             active: true
//         })
//         const express = new Playlist(
//             {
//                 name:"express",
//                 ctype:"backend",
//                 active: true
//             })
//     const result =  await Playlist.insertMany([jsplaylist,express])
//     console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }

// adddata()

const getdatas = async ()=>{
    try{const data = await Playlist.find({ctype : "backend"}).select({name:1}).limit(1)
    console.log(data)
    }catch(err){
        console.log(err)
    }
    
}

// to find elements greater than 50
// Playlist.find({video : {$gt : 50}})
// to find elements greater than or equal to 50
// Playlist.find({video : {$gte : 50}})
// ctype as backend and database
// Playlist.find({ctype : {$in : ["backend","database"]}})
// ctype as not backend and database
// Playlist.find({ctype : {$nin : ["backend","database"]}})
// or
// Playlist.find($or : [{ctype: "backend"},{author:"yash"}])
// and
// Playlist.find($and : [{ctype: "backend"},{author:"yash"}])
// count
// Playlist.find($and : [{ctype: "backend"},{author:"yash"}]).countDocuments()
// sort -1 for desc and 1 for asc
// Playlist.find({ctype:"backend"}).select({name:1}).sort({name:-1})

getdatas()



//update the document
//const updateDocument = async (id) => {
//     try{
//         const result = await Playlist.updateOne({_id : id},{$set : {name : "javascript"}})
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }

// updateDocument("05xhsff459524233")

//delete the document
// const deleteDocument = async (id) => {
//     try{
//         const result = await Playlist.deleteOne({_id:id})
//         console.log(result)
//     }catch(err)
//     {
//         console.log(err)
//     }
//     }
    
// deleteDocument("7dffj445225")
