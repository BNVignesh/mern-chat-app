import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoutes from "./routs/auth.routes.js";
import messageRoutes from "./routs/message.routes.js"
import userRoutes from "./routs/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import {app,server} from './socket/socket.js'

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin:"https://public-chat-app-jkbk.onrender.com/login",
    credentials:true
}));
const PORT=process.env.PORT || 5000
const __dirname=path.resolve();

dotenv.config();

// app.get("/",(req,res)=>{
//     res.send("hello world");
// });
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,'/frontend/build')));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","build","index.html"));
})

server.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`listening to port ${PORT}`)
});