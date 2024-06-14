import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoSearch } from "react-icons/io5";
import useConversation from '../../conversation/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
const SearchInput = () => {
  const [search,setSearch]=useState("");
  const {setSelectedConversation}=useConversation();
  const {conversations}=useGetConversation();
  //console.log(conversations);
  const handleSubmit= (e)=>{
    e.preventDefault();
    if(!search){return;}
    if(search.length<3){return toast.error('search length must be greater than 3')}
    const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLocaleLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }else{
      toast.error('no such user found');
    }
  }
  return (
    <form action="" className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input type="text" placeholder='search' className='input input-bordered rounded-full' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <button type= 'submit' className="btn btn-circle bg-sky-500 text-white">
        <IoSearch className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}
export default SearchInput

//Stater code
// 

// import React from 'react'
// import { IoSearch } from "react-icons/io5";
// const SearchInput = () => {
//   return (
//     <form action="" className='flex items-center gap-2'>
//         <input type="text" placeholder='search' className='input input-bordered rounded-full' />
//         <button type= 'submit' className="btn btn-circle bg-sky-500 text-white">
//         <IoSearch className='w-6 h-6 outline-none' />
//         </button>
//     </form>
//   )
// }

// export default SearchInput
