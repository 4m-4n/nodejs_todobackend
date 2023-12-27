import jwt from "jsonwebtoken"
export const sendcookie=(userr,res,message,statuscode)=>{
  const token=jwt.sign({_id:userr._id},process.env.JWT_SECRET);
res.status(statuscode).cookie("token",token,{
  httpOnly:true,
  maxAge:15*60*1000,
  samesite:process.env.NODE_ENV==="Devlopment"?"lax":"none",
  secure:process.env.NODE_ENV==="Development"?false:true,

}).json({
  success:true,
  message,
  token
});
}