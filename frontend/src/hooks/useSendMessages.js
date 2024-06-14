import React, { useState } from 'react'
import useConversation from '../conversation/useConversation';
import toast from 'react-hot-toast';

const useSendMessages =  () => {
    const [loading, setLoading] = useState(false);
    const {messages,setMessages,selectedConversation}=useConversation();
    const sendMessage =async (message) => {
        try {
            const res=await fetch(`http://localhost:5000/api/messages/send/${selectedConversation._id}`,{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(message),
                credentials:'include'
            })
            const data= await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setMessages([...messages,data]);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return {sendMessage,loading}
}

export default useSendMessages
