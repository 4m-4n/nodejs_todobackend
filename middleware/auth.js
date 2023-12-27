import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
export const isauthenticated=async(req,res,next)=>{
    const token =req.headers?.authorization;
  if(!token) return res.status(404).json({
    success:false,
    message:"Login First",
  })
  const decoded= await jwt.verify(token,process.env.JWT_SECRET);
   req.user=await User.findById(decoded._id);
   next();
   
}