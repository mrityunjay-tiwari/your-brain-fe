import { HomeIcon } from "../../icons/homeIcon";
import { Logo } from "../../icons/logo";
import { XIcon } from "../../icons/xIcon";
import { YouTubeIcon } from "../../icons/youTubeIcon";
import { SideBarElement } from "./sideBarElements";

interface propsType {
    seletedRenderX?: () => void,
    seletedRenderYoutube?:  () => void,
    seletedRenderHome?: () => void,
    customClassname?: string,
    customClassnameX?: string,
    customClassnameYT?: string
}
export function SideBar({seletedRenderX, seletedRenderYoutube, seletedRenderHome,customClassname,customClassnameX,customClassnameYT}: propsType){
    return <div className="h-screen w-1/6 left-0 bg-white p-1 border shadow-lg flex flex-col justify-between absolute">
        <div>
            <div className="pt-7 pb-8 sm:pt-1 sm:pl-4 sm:pb-8 hover:cursor-pointer" onClick={() => {window.location.reload()}}>
                <Logo height={150} width={150} />
            </div>
            <div className="flex flex-col justify-center gap-2">
                <div onClick={seletedRenderHome} className={customClassname}><SideBarElement icon={<HomeIcon siz={6} />} text="All" key={0}/></div>
                <div onClick={seletedRenderX} className={customClassnameX}><SideBarElement icon={<XIcon siz={8} />} text="Twitter" key={1}/></div>
                <div onClick={seletedRenderYoutube} className={customClassnameYT}><SideBarElement icon={<YouTubeIcon siz={6} />} text="YouTube" key={2}/></div>
            </div>
        </div>
             <div className="sm:p-4 text-xs sm:text-sm text-gray-600 flex justify-center items-center sm:justify-start">
                © <span className="hidden md:inline">Mrityunjay Tiwari</span> <span className="md:hidden lg:hidden sm:inline">MT</span>
            </div>
        
    </div>
}