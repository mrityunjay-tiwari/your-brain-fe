import { HomeIcon } from "../../icons/homeIcon";
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
export function BottomBar({seletedRenderX, seletedRenderYoutube, seletedRenderHome}: propsType){
    return <div className="h-1/6 w-[95vw] bg-white rounded-2xl">

            <div className="flex justify-around">
                <div onClick={seletedRenderHome}><SideBarElement icon={<HomeIcon siz={6} />}  key={0}/></div>
                <div onClick={seletedRenderX} ><SideBarElement icon={<XIcon siz={8} />}  key={1}/></div>
                <div onClick={seletedRenderYoutube} ><SideBarElement icon={<YouTubeIcon siz={6} />}  key={2}/></div>
            </div>
        
    </div>
}