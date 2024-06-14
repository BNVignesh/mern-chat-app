import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const logout = async () => {
        setLoading(true);
        try {
            const res=await fetch("http://localhost:5000/api/auth/logout",{
                method:"post",
                headers:{"content-type":"application/json",

                }
            })
            const data= await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.removeItem("chat-user");
            setAuthUser(null);
        }
        catch (error) {
           toast.error(error.message);
           console.log(error.message);
        } finally {
            setLoading(false)
        }
    }

    return {loading,logout};
}

export default useLogout