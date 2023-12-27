
import { Task } from "../models/task.js"

export const createtask=async(req,res,next)=>{
try {
  const {title,description}=req.body
  const task= await Task.create({
   title, description , user:req.user,
  })
  res.status(200).json({
    success:"true",
    message:" task added successfully",
  })
} catch (error) {
  next(error);
}
  
}

export const getmytask=async(req,res,next)=>{
  try {
    const userid= req.user._id;
  const tasks=await Task.find({user:userid});
  res.status(200).json({
    success:true,
    tasks,
  }) 
  } catch (error) {
    next(error);
  } 
}
export const updatetask=async(req,res,next)=>{
 try {
  const {id}= req.params;
  const task=await Task.findById(id);
  if(!task) return next(new Error("task not found",404));
  task.iscompleted=!task.iscompleted;
  task.save();
  res.status(200).json({
    success:true,
    message:" task updated"
  })  
 } catch (error) {
  next(error);
 }
}
export const deletetask=async(req,res,next)=>{
 try {
  const {id}= req.params;
  const task=await Task.findById(id);
  if(!task) return next(new Error("task not found",404));
  await task.deleteOne();
  res.status(200).json({
    success:true,
    message:" task deleted"
  }) 
 } catch (error) {
  next(error);
 } 
}