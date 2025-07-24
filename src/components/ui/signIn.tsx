import { useRef } from "react";
import { Logo } from "../../icons/logo";
import { Button } from "./button";
import { InputBox } from "./input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function Signin(){
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin(){    
        const username = userNameRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`,{
            username : username,
            password : password
        })

        const data = response.data as {token : any}
        const jwt = data.token;
        localStorage.setItem("token", jwt)
        navigate("/dashboard")
        alert('signedin')
    }
    return <div className="h-screen w-screen flex justify-center items-center bg-slate-50">
        <div className="h-auto w-96 bg-white shadow-lg flex flex-col items-center p-6 justify-self-center border rounded-lg ">
        <div className="font-light text-xl pb-6 flex items-end">SIGnIN TO <Logo height={100} width={100}/>  </div>
        <div className="w-full">
            <InputBox reference={userNameRef} content="Username"/>
            <InputBox reference={passwordRef} content="Password"/>
        </div>
        <div className="pt-4">
            <Button onclick={signin} variant="secondary" text="Submit"/>
        </div>
    </div>
    </div>
}