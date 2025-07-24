import { EmailIcon } from "../../icons/emailIcon";
import { LogoutIcon } from "../../icons/logout";
import { UserIcon2 } from "../../icons/userIcon2";
import { Button } from "./button";
import { DropDownUnit } from "./dropDownUnit";
import { useDetails } from "../../hooks/useDetails";
import { useNavigate } from "react-router-dom";


export function DropDown() {
    const userDetails = useDetails();
    const navigate = useNavigate();

    function logoutfn(){
        localStorage.removeItem("token")
        navigate('/')
    }
    return <div className="flex flex-col bg-white rounded-xl shadow-lg justify-center items-center z-10 absolute border-2">
        <DropDownUnit icon={<UserIcon2 siz={4} />} text={userDetails?.username || "Loading..."} /> 
        <DropDownUnit icon={<EmailIcon siz={4} />} text={userDetails?.email || "Loading..."} /> 
        <div className="py-2"><Button startIcon={<LogoutIcon siz={4} />} variant="primary" text="Logout" onclick={logoutfn} /></div>
    </div>
}