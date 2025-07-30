import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../icons/logo";
import { Button2 } from "./button2";
import { LoginIcon } from "../../icons/loginIcon";

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

    return <div className="flex items-center justify-between w-full pr-2 sm:w-5/6 h-auto">
        <div onClick={homePage} className="hover:cursor-pointer"><Logo otherBg={false} height={120} width={120} height2={90} width2={90}/></div>
        <div className="flex gap-[10px] sm:gap-5 items-center">
            <Link to={'https://github.com/mrityunjay-tiwari/your-brain'} target="_blank"> <div className="hover:scale-110 transition-all"><img className="w-6 h-6 sm:w-7 sm:h-7" src="https://ik.imagekit.io/mrityunjay/github-142-svgrepo-com.svg?updatedAt=1752137737186" /></div> </Link>
            <div className="gap-5 hidden sm:flex">
                <Button2 onclick={signinPage} variant="primary" text="SignIn"/>
                <Button2 onclick={signupPage} variant="secondary" text="SignUp"/>
            </div>
            <div className="inline sm:hidden" onClick={signupPage}>
                <LoginIcon siz={6} />
            </div>
        </div>
    </div>
}