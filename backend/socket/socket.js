import { Server } from "socket.io";
import http from 'http';
import express from 'express';
import { Socket } from "dgram";

const app=express();
const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:'https://public-chat-app-jkbk.onrender.com',
        methods:['GET','POST']
    }
});

export const getReceiverSocketId=(receiverId)=>{
    return userSocketMap[receiverId];
}
const userSocketMap={};
io.on('connection',(socket)=>{
    console.log('a user connected',socket.id);
    const userId=socket.handshake.query.userId;
    if(userId!==undefined){
        userSocketMap[userId]=socket.id;
    }
    //io.emit() is used to send events to all the conneceted clients
    io.emit('getOnlineUsers',Object.keys(userSocketMap))
    //Socket.on() is used to listen to all the events and it can be used on both frontend and backend
    socket.on('disconnect',()=>{
        console.log('user disconnected',socket.id);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers',Object.keys(userSocketMap));
    })
})

export {app,io,server};