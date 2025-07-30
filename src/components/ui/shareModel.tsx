import React, { useRef, useState } from "react"
import { CloseIcon } from "../../icons/closeIcon"
import { Button } from "./button"
import { InputBox } from "./input"
import { InputCheckbox } from "./inputCheckbox"
import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface propsTypes {
    open?: boolean,
    onClose?: () => void,
    defaulttitle?: string,
    defaultdescription?: string,
    defaultlink? : string,
    contentId?: string;
    onupdate?: () => void,
    refer?: React.RefObject<HTMLInputElement | null>,
    mainref?: React.RefObject<HTMLInputElement | null>,
    closeclick?: () => void
}

// @ts-ignore
enum setContentType {
    Twitter= "tweet",
    YouTube = "youtube"
}
export function ShareModel({open, onClose, defaulttitle, defaultdescription, defaultlink, contentId, onupdate, refer, mainref,closeclick } : propsTypes){
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const tweetRef = useRef<HTMLInputElement>(null);
    const youTubeRef = useRef<HTMLInputElement>(null);
    const [selectType, setSelectType] = useState<setContentType | null>(null);

    function selectTypefn(types : setContentType | null) {
        setSelectType(prev => (prev === types ? null : types))
    }

    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    const link = linkRef.current?.value;
    const tweets = tweetRef.current?.checked;
    const videos = youTubeRef.current?.checked;

    let type: string;
    // console.log(`Tweets - ${tweets},Videos - ${videos}`);
    if(tweets){
        type = 'tweet';
    } else if(videos) {
        type = 'youtube';
    }
    
    async function submit(){
        console.log(`Title - ${title}, description - ${description}, link - ${link} Type - ${type}`);
        console.log(contentId);
        
        if(contentId){
            await axios.put(`${BACKEND_URL}/api/v1/content/content/${contentId}`,{
                link : link,
                type : type,
                title: title,
                description: description,
            },{
                headers: {
                    token: localStorage.getItem("token")
                }
            })

            onupdate?.()

        } else {
            await axios.post(`${BACKEND_URL}/api/v1/content/content`,{
            link : link,
            type : type,
            title: title,
            description: description,
        },{
            headers: {
                "token": localStorage.getItem("token")
            }
        })
        }         
    }

    
    return <div>
        {open && <div className="w-screen h-screen bg-slate-700/70 fixed top-0 left-0 justify-center flex z-20" ref={mainref} onClick={closeclick}>
            <div className="flex flex-col justify-center items-center" ref={refer}>
                
                <span className="bg-white p-4 px-7 rounded-lg min-w-[450px] shadow-2xl">
                    <div className="flex justify-between items-center">
                        <div className="font-medium text-xl">Your Brain</div>
                        <div onClick={onClose}><CloseIcon/></div>
                    </div>
                    <div className="pt-6 flex gap-5 justify-end">
                   
                            <InputCheckbox reference={tweetRef} checkedd={selectType === setContentType.Twitter} contentType="tweet" name="Twitter" selectType={() => selectTypefn(setContentType.Twitter)} key={1} />
                            <InputCheckbox reference={youTubeRef} checkedd={selectType === setContentType.YouTube} contentType="youtube" name="YouTube" selectType={() => selectTypefn(setContentType.YouTube)} key={2} />
                      
                    </div>
                    <div className="pt-2">
                        <InputBox defaultvalue={defaulttitle} reference={titleRef} content="Title"/>
                        <InputBox defaultvalue={defaultdescription} reference={descriptionRef} content="Description"/>
                        <InputBox defaultvalue={defaultlink} reference={linkRef} content="Link"/>
                    </div>

                        <div className="mt-4 justify-items-end" onClick={onClose}>
                            <Button onclick={submit} variant="secondary" text="Submit"/>
                        </div>

                </span>
            </div>
        </div> }

    </div>
}