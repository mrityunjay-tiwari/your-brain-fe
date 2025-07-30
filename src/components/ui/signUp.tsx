import { useRef } from "react";
import { Logo } from "../../icons/logo";
import { InputBox } from "./input";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button2 } from "./button2";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
console.log(BACKEND_URL);

export function Signup(){
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    
    async function signup(){
        const username = userNameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/signup`,{
            username : username,
            email : email,
            password : password
        })
        navigate("/signin")
        alert('You have signedup');
    }

    return <div className="h-screen w-screen flex justify-center items-center bg-slate-50">
        <div className="h-auto w-80 sm:w-96 bg-white shadow-lg flex flex-col items-center p-6 justify-self-center border rounded-lg ">
        <div className="font-light text-lg sm:text-xl pb-6 flex items-end">SIGnUP TO <Logo height={100} width={100} height2={115} width2={115}/>  </div>
        <div className="w-full">
            <InputBox reference={userNameRef} content="Username"/>
            <InputBox reference={emailRef} content="Email"/>
            <InputBox reference={passwordRef} content="Password"/>
        </div>
        <div className="pt-4">
            <Button2 onclick={signup} variant="secondary" text="Submit"/>
        </div>  
        <div className="pt-5"><h1 className="font-thin text-sm">Already have an account? <Link to={'/signin'}> <span className="text-blue-700 font-semibold">Login</span></Link> </h1></div>
    </div>
    </div>
}