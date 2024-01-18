import express from "express";
import userrouter from "./routes/user.js";
import taskrouter from "./routes/task.js";

import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errormidware } from "./middleware/error.js";
import cors from "cors";


export const app = express();
 config({
    path:"./data/config.env",
 });

app.use(express.json());
app.use("/api/v1/users", userrouter);
app.use("/api/v1/task",taskrouter);
app.use(cookieParser());
app.get("/", (req, res) => {
    res.send("niceee");
});
app.use(errormidware);
// app.use(cors({
//     origin:[process.env.FRONTEND_URL],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials:true,
// }))
app.use(cors({origin:"*"}));

