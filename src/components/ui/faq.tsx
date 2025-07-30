import { AccessIcon } from "../../icons/accessIcon";
import { EditIcon } from "../../icons/editIcon";
import { LockIcon } from "../../icons/openLock";
import { SearchIcon } from "../../icons/searchIcon";
import { ShareIcon } from "../../icons/shareIcon";
import { TagIcon } from "../../icons/tagIcon";
import { FaqBlock } from "./faqBlock";

export function Faq(){
    return <div className="w-screen h-auto px-12 pb-8 sm:pb-32 bg-gradient-to-tl from-sky-100 to-white overflow-x-hidden">
        <div>
            <div className="text-3xl sm:text-4xl font-semibold text-center pt-20 pb-8 sm:pb-16">How YourBrain <span className="font-light text-sky-500"> helps you!</span></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-10 ">
            <FaqBlock icon={<ShareIcon siz={4} />} text="One-Click Sharing" description="Share your brain instantly with just one click." />
            <FaqBlock icon={<AccessIcon siz={4} />}  text="Control Access" description="Change or revoke permissions whenever you want." />
            <FaqBlock icon={<LockIcon siz={4} />} text="Guest Access Support" description="Let others view shared brains without needing to sign up." />
            <FaqBlock icon={<EditIcon siz={4} />} text="Edit with Ease" description="Update, modify, or remove saved content anytime." />
            <FaqBlock icon={<SearchIcon siz={4} />} text="Search Through" description="Let's you share your content" />
            <FaqBlock icon={<TagIcon siz={4} />} text="Browse by Category" description="Navigate easily through notes, tweets, and links." />
        </div>
    </div>
}