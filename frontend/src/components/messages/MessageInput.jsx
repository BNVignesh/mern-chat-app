import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessages from '../../hooks/useSendMessages';
const MessageInput = () => {
    const [message,setMessage]=useState("");
    const {loading,sendMessage}=useSendMessages();
    const handleSubmit= async (e)=>{
        e.preventDefault();
        if(!message) return;
        await sendMessage({message});
        setMessage("");
    }
    return (
        <div>
            <form action="" className='px-4 my-3' onSubmit={handleSubmit}>
                <div className='w-full relative'>
                    <input type="text" placeholder="send a message" className="input input-bordered block w-full max-w-xs" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                    
                    <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>{loading ? (<div className='loading loading-spinner'></div>):( <BsSend />)}</button>
                                   
                </div>
            </form>
        </div>
    )
}

export default MessageInput

//stater code
// import React from 'react'
// import { BsSend } from 'react-icons/bs'
// const MessageInput = () => {
//     return (
//         <div>
//             <form action="" className='px-4 my-3'>
//                 <div className='w-full'>
//                     <input type="text" placeholder="send a message" className="input input-bordered w-full max-w-xs" />
                    
//                     <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'></button>
//                     <BsSend />                
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default MessageInput
