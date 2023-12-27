import mongoose from "mongoose";
const schema = new mongoose.Schema({     //schema creation 
    title:{
type: String,
unique:true,
required:true,
    } ,
     description:{ 
        type: String,
        required:true,
        unique:true,
     },
     iscompleted:{
        type:Boolean,
        default:false,
       } ,
       user:{
           type:mongoose.Schema.Types.ObjectId,
           ref:"User",
           required:true,
       },
   
    createdat:{
        type:Date,
        default:Date.now,
    },
});

export const Task = mongoose.model("Task", schema);