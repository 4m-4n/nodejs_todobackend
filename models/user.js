import mongoose from "mongoose";
const schema = new mongoose.Schema({     //schema creation 
    name: {
        type:String,
        required:true,
    },
     email:{ 
        type: String,
        required:true,
        unique:true,
     },
  
    createdate:{
        type:Date,
        default:Date.now,
    },
    password:{
        type:String,
        required:true,
       } ,
});

export const User = mongoose.model("User", schema);