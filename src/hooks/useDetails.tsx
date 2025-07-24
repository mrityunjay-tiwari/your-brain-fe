import axios from "axios";
import { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface detailProps {
        _id: string,
        "username": string,
        password: string,
        email: string,
        __v: number
}

export function useDetails() {
    const [userDetails, setUserDetails] = useState<detailProps | null>(null);

    async function submit() {
        const response = await axios.get(`${BACKEND_URL}/api/v1/userdetails`,{
        headers :{
            token : localStorage.getItem("token") || ""
        }
    })

    const data = response.data as {userDetails : detailProps}
    setUserDetails(data.userDetails)
    }


    useEffect(() => {
        submit()
        const interval = setInterval(() => {
            submit()
        }, 3000);

        return () => clearInterval(interval)
    },[])


    console.log('Userdetials' , userDetails);
    
    
    return userDetails
    
}