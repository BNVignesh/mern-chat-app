import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const {loading,messages}=useGetMessages();
  //console.log(messages);
  useListenMessages();
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length>0 && messages.map((message)=>{
        return(<Message key={message._id} message={message}/>)
        
      })}
      {!loading && messages.length===0 && (
        <p className='text-center'>send message to start conversation</p>
      )}
    </div>
  )
}

export default Messages

//stater code
// import React from 'react'
// import Message from './Message'

// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
      
//     </div>
//   )
// }

// export default Messages
