import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"
export const sendMessage= async(req,res)=>{
    try{
        let {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;
        const conversation=await Conversation.findOne({
            participents:{$all:[senderId,receiverId]}
        })
        if(!conversation){
            conversation=await Conversation.create({
                participents:[senderId,receiverId]
            })
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            message
        })
        if(newMessage){
            conversation.messages.push(newMessage._id)

        }
        res.status(201).json(newMessage);
        await conversation.save();
        await newMessage.save();
    }
    catch(error){
        console.log("error in send message controller:",error.message);
        res.status(500).json({error:"internal server error"});
    }
}

export const getMessage=async(req,res)=>{
    console.log('got request');
    try{
        let {id: toid}=req.params;
        let senderId=req.user._id;
        
        let conversation=await Conversation.findOne({
            participents:{$all : [senderId,toid]}
        }).populate("messages");
        if(!conversation) return res.status(200).json([]);
        res.status(200).json(conversation.messages);
        
    }
    catch(error){
        console.log("error in send message controller:",error.message);
        res.status(500).json({error:"internal server error"});
    }
}