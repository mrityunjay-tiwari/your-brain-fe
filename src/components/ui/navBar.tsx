import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../icons/logo";
import { Button } from "./button";
import { Button2 } from "./button2";

export function NavBar(){
    const navigate = useNavigate();
    function signinPage(){
        navigate('/signin')
    }

    function signupPage(){
        navigate('/signup')
    }
    
    function homePage(){
        navigate("/")
    }

    return <div className="flex items-center justify-between w-5/6 h-auto">
        <div onClick={homePage} className="hover:cursor-pointer"><Logo height={120} width={120}/></div>
        <div className="flex gap-5 items-center">
            <Link to={'https://github.com/mrityunjay-tiwari/your-brain'} target="_blank"> <div className="hover:scale-110 transition-all"><img className="w-7 h-7" src="https://ik.imagekit.io/mrityunjay/github-142-svgrepo-com.svg?updatedAt=1752137737186" /></div> </Link>
            <Button2 onclick={signinPage} variant="primary" text="SignIn"/>
            <Button2 onclick={signupPage} variant="secondary" text="SignUp"/>
        </div>
    </div>
}