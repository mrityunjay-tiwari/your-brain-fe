import { useRef } from "react";
import { CloseIcon } from "../../icons/closeIcon";
import { Button } from "./button";
import { InputBox } from "./input";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface propsTypes {
    open : boolean,
    onClose?: () => void
}

export function DeleteBox({open, onClose} : propsTypes) {
    const deleteRef = useRef<HTMLInputElement>(null);
    // const deleteText = deleteRef.current?.value;

    async function deletefn(){
            await axios.delete(`${BACKEND_URL}/api/v1/delete`,{
                headers: {
                    "token": localStorage.getItem("token")
                }
            }
        );
        console.log('deleted');
    }

    return <div>
        {open && <div className="w-screen h-screen bg-slate-700/70 fixed top-0 left-0 justify-center flex z-10">
            <div className="flex flex-col justify-center items-center">
                <span className="bg-white p-4 px-7 rounded-lg min-w-[450px] shadow-2xl">
                    <div className="flex justify-between items-center">
                        <div className="font-medium text-lg">Type 'delete' to confirm</div>
                        <div onClick={onClose}><CloseIcon/></div>
                    </div>
                    <div className="pt-2">
                        <InputBox reference={deleteRef} content="Type here..." />
                    </div>
                    <div className="mt-4 justify-items-end" onClick={onClose}>
                        <Button onclick={deletefn} variant="secondary" text="Submit"/>
                    </div>
                </span> 
            </div>
        </div> }
    </div>
}