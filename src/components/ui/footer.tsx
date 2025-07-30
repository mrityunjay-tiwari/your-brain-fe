import { Link } from "react-router-dom";
import { XIcon } from "../../icons/xIcon";

export function Footer() {
    return <div className="h-full w-full flex items-end justify-between bg-gradient-to-bl from-sky-50 to-white">
        <div className="h-full w-full flex flex-col sm:flex-row sm:items-end items-center justify-between px-10 py-4 bg-gradient-to-tl from-blue-200 to-white rounded-t-3xl border-t-4 shadow-2xl">
            <div className="text-sm text-gray-600">All rights reserved © Mrityunjay Tiwari</div>
        <div className="flex-row sm:flex sm:flex-col sm:items-end">
            <div className="text-gray-700 font-thin">Connect with us : </div>
            <div className="flex justify-center items-center gap-2 sm:gap-4">
                <Link to={"https://github.com/mrityunjay-tiwari/your-brain"} target="_blank"><div><img className="w-[18px] h-[18px]" src="https://ik.imagekit.io/mrityunjay/github-142-svgrepo-com.svg?updatedAt=1752137737186" /></div> </Link>
                <Link to={"https://x.com/mrityunjay_18"} target="_blank"><div><XIcon siz={3} siz2={5} /></div> </Link>
            </div>
        </div>
        </div>
    </div>
}