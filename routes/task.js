import express from "express";
import { createtask ,deletetask,getmytask, updatetask } from "../controllers/task.js";
import { isauthenticated } from "../middleware/auth.js";
const router=express.Router();
router.get("/mytask",isauthenticated, getmytask);
router.post("/newtask",isauthenticated, createtask);
router.route("/:id").put(isauthenticated, updatetask).delete(isauthenticated, deletetask);
export default router;