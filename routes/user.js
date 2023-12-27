import express from "express";
import { User } from "../models/user.js";
import { getmyprofile, register, login, logout } from "../controllers/users.js";
import { isauthenticated } from "../middleware/auth.js";

const router = express.Router();



router.post("/new", register);
router.post("/login",login);
router.get("/me",isauthenticated, getmyprofile);
router.get("/logout",logout);
export default router;
 
 