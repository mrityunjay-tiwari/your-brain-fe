import axios from "axios";
import { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function useContent() {
    const [content, setContents] = useState([]);
    const [tweets, setTweets]= useState([]);
    const [yoututbeContent, setYoututbeContent] = useState([]);

    async function submit() {
        const response = await axios.get(`${BACKEND_URL}/api/v1/mycontents`,{
            headers : {
                "token" : localStorage.getItem("token") || ""
            }
        })
        // console.log(response.data);
        
        
        const data = response.data as { yourcontents: any,twitterContent: any, youTubeContent: any };
        setTweets(data.twitterContent)
        setYoututbeContent(data.youTubeContent)
        setContents(data.yourcontents)

        
    }
    
    useEffect(() => {
        submit()
        const interval = setInterval(() => {
            submit()
        }, 2000);
        return () => clearInterval(interval)
    },[])
    
    return {
        content,
        tweets,
        yoututbeContent
    }

} 