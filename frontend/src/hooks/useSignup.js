import React from 'react'
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { json } from 'react-router-dom';
const useSignup = () => {
    const [loading,setLoading]=useState(false);
    const {authUser,setAuthUser}=useAuthContext();
  const signup=async ({fullName,username,password,confirmPassword,gender})=>{
    const success=handleInpurError({fullName,username,password,confirmPassword,gender});
    if(!success)return;
    setLoading(true);
    try{

        const res=await fetch("http://localhost:5000/api/auth/signup",{
            method:"POST",
            
            headers:{"content-type":"application/json"},
            body:JSON.stringify({fullName,username,password,confirmPassword,gender})
        })
        const data=await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.setItem("chat-user",JSON.stringify(data));

        setAuthUser(data);
        console.log(data);
    }
    catch(error){
        toast.error(error.message)
    }finally{
        setLoading(false)
    }
  }
  return {loading,signup}
}

export default useSignup


function handleInpurError({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username ||!password|| !confirmPassword|| !gender){
        toast.error('please fill all fields')
    }
    if(password!==confirmPassword){
        toast.error('passwords does not match');
        return false
    }
    if(password.length< 6){
        toast.error('password must atleast 6 ');
        return false
    }
    return true;
}