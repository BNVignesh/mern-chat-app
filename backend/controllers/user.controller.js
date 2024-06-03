import User from "../models/user.model.js";

export const getUsesForSidebar=async (req,res)=>{
    try{
        const loggeduserid=req.user._id;
        const filterdusers= await User.find({_id:{$ne : loggeduserid}}).select("-password");
        res.status(200).json(filterdusers);
    }
    catch(error){
        console.log("error in getusersforsidebar controller", error.message);
        res.status(500).json({error:"internal server erro"})
    }
}