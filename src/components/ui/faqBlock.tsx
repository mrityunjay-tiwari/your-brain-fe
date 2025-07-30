import type { ReactElement } from "react"

interface propTypes{
    text: string,
    description: string,
    icon: ReactElement
}
export function FaqBlock({text, description, icon} : propTypes) {
    return <div className="border w-80 sm:w-96 h-55 rounded-2xl shadow-xl p-5 bg-gradient-to-tr from-slate-200 to-white">
    <div className="flex flex-col gap-2">
        <div>
            <div className="gap-2 flex items-center">
                {icon}
                <div className="text-zinc-700 text-xl sm:text-2xl font-medium line-clamp-1">{text}</div>
            </div>
        </div>
        <div>
            {description}
        </div>
    </div>
    </div>
}