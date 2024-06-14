import React from 'react'
import useConversation from '../../conversation/useConversation'

const Conversation = ({conversation,lastidx}) => {
    const {selectedConversation,setSelectedConversation}=useConversation();
  return (
    <>
        <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${selectedConversation && selectedConversation._id===conversation._id ? ("bg-sky-500"):""}`} onClick={()=>{setSelectedConversation(conversation)}}>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src={conversation.profilePic} alt="user avatar" />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'>{conversation.fullName}</p> 
                    <span className='text-xl'>🎃</span>
                </div>
            </div>
        </div>
        {!lastidx && <div className='divider my-0 py-0 h-1'/>}
        
    </>
  )
}

export default Conversation

//Stater code
// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//         <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//             <div className='avatar online'>
//                 <div className='w-12 rounded-full'>
//                     <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar" />
//                 </div>
//             </div>
//             <div className='flex flex-col flex-1'>
//                 <div className='flex gap-3 justify-between'>
//                     <p className='font-bold text-gray-200'>John Doe</p> 
//                     <span className='text-xl'>🎃</span>
//                 </div>
//             </div>
//         </div>
//         <div className='divider my-0 py-0 h-1'/>
//     </>
//   )
// }

// export default Conversation
