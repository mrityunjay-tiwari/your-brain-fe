import axios from "axios";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { ContentCard } from "./card";
import { SideBar } from "./sideBar";
import { Username } from "./sharePageUsername";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface propsType {
    title?: string,
    description: string,
    link: string,
    type: "youtube" | "tweet",
    _id: string
}

export function ShareallPage() {
    const {token} = useParams();

    const [username, setUsername] = useState<string>("");
    const [contents, setContents] = useState([]);

    async function getContents() {
        const response = await axios.get(`${BACKEND_URL}/api/v1/content/shareall/${token}`)
        const data = response.data as {username : any, allContents: any}
        setUsername(data.username)
        setContents(data.allContents)
        console.log(data.username);
        console.log(data.allContents);
    }

    useEffect(() => {
        getContents()
    },[])

    return <div className="h-screen w-screen flex overflow-hidden">
        {/* params is - {token} */}
        <div className="w-1/6 h-full hidden sm:inline">
            <SideBar />
        </div>
        <div className="flex-1 bg-slate-100 p-6 flex flex-col gap-6 overflow-hidden">
            <div className="flex justify-end items-end pr-4 py-2 text-end">
                <Username username={username} text="'s Brain" />
            </div>
            <div className="flex gap-4 overflow-auto h-full">
                {contents?.map((ct : propsType) => {
                    return <ContentCard controls={false} description={ct.description} link={ct.link} type={ct.type} title={ct.title} key={ct.description}/>
                })}
            </div>
            
        </div>
    </div>
}