import { useEffect, useRef, useState } from "react"
import { CloseIcon } from "../../icons/closeIcon"
import { CopyBox } from "./copyBox"
import { InputBox } from "./input"
import { InputCheckbox } from "./inputCheckbox"
import { InputCheckbox2 } from "./inputCheckBox2"
import axios from "axios"
import { TickBox } from "./tickBox"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const SHARE_URL = import.meta.env.VITE_SHARE_URL;

interface propTypes {
    open: boolean,
    onClose: () => void
}

// @ts-ignore
enum setContentType {
    Yes = "1",
    No = "0"
}

export function ShareBox({open, onClose}: propTypes) {
    
    const inputRef = useRef<HTMLInputElement>(null);
    const [copied, setCopied] = useState(false);
    
    function copyLink() {
        const inputVal = inputRef.current?.value;
        if(inputVal) {
            navigator.clipboard.writeText(inputVal)
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 3500);
        }
    }

    const [selectType, setSelectType] = useState<setContentType | null>(null);
    const [linktoShare, setLinktoShare] = useState<string>("");
    // const []
    function selectTypefn(types : setContentType | null) {
        setSelectType(prev => (prev === types ? null : types))
    }
       
        async function shareLink() {
        const response = await axios.post(`${BACKEND_URL}/api/v1/content/shareall`,{
            share: selectType === setContentType.Yes
        },{
            headers: {
                token: localStorage.getItem("token") || ""
            }
        })
        
        const data = response.data as {shareableLink : string, hash: string}
        setLinktoShare(`${SHARE_URL}/shareall/${data.hash}`)
        console.log(linktoShare);
        console.log(selectType === setContentType.Yes);
        console.log(data.shareableLink);
        console.log(data.hash);
        
    }

    useEffect(() => {
        if (selectType === setContentType.Yes) {
            shareLink(); 
        }
    }, [selectType]);

    return <div>
        {open && (
            <div className="w-screen h-screen bg-slate-700/70 fixed top-0 left-0 justify-center flex z-20">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center h-full">
                        <div className="w-96 p-7 shadow-md border rounded-xl max-h-min bg-white h-2/5">
                            <div className="flex justify-between items-center">
                                <div className="font-medium text-xl">Want to share YourBrain?</div>
                                <div onClick={onClose}><CloseIcon/></div>
                            </div>
                            <div className="pt-6 flex gap-5 justify-start">         
                                <InputCheckbox checkedd={selectType === setContentType.Yes} contentType="tweet" name="Yes" selectType={() => selectTypefn(setContentType.Yes)}  key={1} />
                                <InputCheckbox checkedd={selectType === setContentType.No} contentType="youtube" name="No" selectType={() => selectTypefn(setContentType.No)}  key={2} />
                            </div>
                            {(selectType === setContentType.Yes) && <div>
                                <div className="pt-2 flex items-center w-full">
                                <div className="flex-1">
                                    <InputBox reference={inputRef} onchange={(e) => setLinktoShare(e.target.value)} defaultvalue={linktoShare} content="Shareable Link"/>
                                </div>
                                <div onClick={copyLink} className="flex justify-center items-center border-2 border-l-0 rounded-lg p-2 bg-zinc-100 hover:bg-zinc-200 cursor-pointer" >
                                    {copied? <TickBox /> : <CopyBox /> }
                                </div>
                            </div>
                            <div>
                                <InputCheckbox2 name="Shorten URL" />
                            </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
}