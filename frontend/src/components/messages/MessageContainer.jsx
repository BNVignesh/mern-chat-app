import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
const MessageContainer = () => {
  const noChat = false;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {noChat ? ("no chat selected") : (<>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
          <span className='label-text'>To:</span>
          <span className='text-grey-900 font-bold'>John doe</span>
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
