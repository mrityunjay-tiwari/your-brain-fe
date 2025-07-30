import { useNavigate } from "react-router-dom";
import { RightArrow } from "../../icons/rightArrow";
import { Button2 } from "./button2";
import { NavBar } from "./navBar";
import { ScrollPage } from "./scrollScreen";
import { FeaturesPage } from "./features";
import {AccordionUsage} from "./faqAccordian";
import { Footer } from "./footer";
import { useEffect } from "react";
import { Faq } from "./faq";

export function LandingPage() {
    const navigate = useNavigate();
    function signupPage() {
        navigate("/signup")
    }

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("token");

        if(isLoggedIn){
            navigate('/dashboard')
        }
       
    },[])
    return <div>
        <div className="h-screen w-screen border p-5 bg-gradient-to-tl from-sky-100 to-bg-white">
            <div className="flex justify-center pt-2"><NavBar /></div>
            <div>
                <div className="flex items-center justify-center pt-10"><img className="w-60 sm:w-1/6 sm:h-1/6 drop-shadow-xl" src="https://ik.imagekit.io/mrityunjay/brain-generator-idea-svgrepo-com.svg?updatedAt=1752139837003" /></div>
            <div className="flex flex-col items-center justify-center text-center">
                <div className="text-4xl sm:text-5xl font-bold py-4">Your <span className="text-blue-400 drop-shadow-sm">Second Brain</span></div>
                <div className="text-xl sm:text-3xl font-light py-1">"Custom Save what you need to revisit!"</div>
                <div className="text-md sm:text-xl font-thin italic">Smart way to save and retrive, what you may forget otherwise.</div>
            </div>
            <div className="justify-items-center p-8"><Button2 onclick={signupPage} variant="primary" text="Try Now" endIcon={<RightArrow height={4} width={4} />}/> </div>
            </div>
        </div> 
        <div>
            <ScrollPage />
        </div>
        <div>
            <Faq />
        </div>
        <div className="hidden sm:inline">
            <FeaturesPage />
        </div>
        <div className="h-auto py-20 sm:py-24 w-screen flex flex-col justify-center items-center gap-10 bg-gradient-to-bl from-sky-100 to-white">
            <div className="text-3xl sm:text-4xl font-semibold px-4 sm:px-0 text-center">Frequently Asked<span className="font-light text-sky-500"> Questions</span></div>
            <div className="w-[80vw] sm:w-1/2"><AccordionUsage /></div>
        </div>
        <div className="h-1/6 w-screen">
            <Footer />
        </div>
    </div>
} 