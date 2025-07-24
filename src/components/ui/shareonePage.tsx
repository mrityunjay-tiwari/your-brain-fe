import axios from "axios";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { ContentCardPopped } from "./cardPop";
import { Username } from "./sharePageUsername";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface propsType {
    title?: string,
    description: string,
    link: string,
    type: "youtube" | "tweet",
    _id: string
}

export function ShareOnePage() {
    const {token} = useParams();

    const [username, setUsername] = useState<string>('');
    const [contents, setContents] = useState<propsType>();

    async function getIndividualContent(){
        const response = await axios.get(`${BACKEND_URL}/api/v1/content/shareone/${token}`)
        const data = response.data as {username : any, content : any}
        setContents(data.content)
        setUsername(data.username)
    }
    console.log("Contents are ", contents);
    console.log( "Username is ", username);

    useEffect(() => {
        getIndividualContent()
    }, [])
    return <div>
            <div className="absolute z-30 bg-white w-full justify-items-end p-2"><Username text="Brain" username={username} key={1} /></div> 
        
            <ContentCardPopped controls={false} open={true} description={contents?.description} link={contents?.link} type={contents?.type} title={contents?.title} />
    
    </div>
}