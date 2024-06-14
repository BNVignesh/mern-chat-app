import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../conversation/useConversation'
const MessageContainer = () => {
  const {selectedConversation,setSelectedConversation}=useConversation();
  useEffect(()=>{
    return ()=>setSelectedConversation(null);
  },[setSelectedConversation])
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? ("no chat selected") : (<>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
          <span className='label-text'>To:</span>
          <span className='text-grey-900 font-bold'>{selectedConversation.fullName}</span>
        </div>
        <Messages />
        <MessageInput />
        {/* <Messages/>
      <MessageInput/> */}
      </>)}
    </div>
  )
}

export default MessageContainer
