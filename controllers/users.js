import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendcookie } from "../util/features.js";



export const getusersall = async (req, res) => {

}
export const getuserdetail = async (req, res) => {

}


export const register = async (req, res,next) => {
 try {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

if (user) return next(new Error("User Already exists", 400));
  const hashedpass = await bcrypt.hash(password, 10);
  const userr = await User.create({
    name, email, password: hashedpass,
  });
  sendcookie(userr, res, "registered successfully", 200);
 } catch (error) {
  next(error);
 }
}
export const login = async (req, res,next) => {
  try {
    const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return next(new Error("invalid username or password", 400));
  const ismatch = await bcrypt.compare(password, user.password);

  if (!ismatch) return next(new Error("invalid username or password", 400));
  sendcookie(user, res, `welcome, ${user.name}`, 200);
  } catch (error) {
    next(error);
  }

}
export const getmyprofile = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  })
}
export const logout = (req, res) => {
  res.status(200).cookie("token", "", {
    expires: new Date(Date.now()),
    samesite:process.env.NODE_ENV==="Devlopment"?"lax":"none",
    secure:process.env.NODE_ENV==="Development"?false:true,

  }).json({
    success: "true",
  });
}
