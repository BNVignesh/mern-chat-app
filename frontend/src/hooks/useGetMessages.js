import React, { useEffect, useState } from 'react'
import useConversation from '../conversation/useConversation';
import toast from 'react-hot-toast';


const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    useEffect(() => {
        const getMessage = async () => {
            setLoading(true);

            try {
                //console.log(selectedConversation._id);
                const res = await fetch(`http://localhost:5000/api/messages/${selectedConversation._id}`, {
                    method:'GET',
                    credentials: 'include'
                })
                const data = await res.json();
                setMessages(data);
                if (data.error) {
                    throw new Error(data.error);
                }
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false)
            };
            

        }
        if(selectedConversation?._id){getMessage()};
    },[selectedConversation?._id,setMessages])
    return{messages,loading}
}

export default useGetMessages
