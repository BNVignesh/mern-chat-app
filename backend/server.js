import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routs/auth.routes.js";
import messageRoutes from "./routs/message.routes.js"
import userRoutes from "./routs/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app=express();
app.use(express.json())
app.use(cookieParser());
const PORT=process.env.PORT || 5000

dotenv.config();

// app.get("/",(req,res)=>{
//     res.send("hello world");
// });
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
app.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`listening to port ${PORT}`)
});