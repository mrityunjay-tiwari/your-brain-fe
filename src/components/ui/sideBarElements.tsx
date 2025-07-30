import type { ReactElement } from "react"

interface propsType{
    icon: ReactElement,
    text?: string
}
export function SideBarElement({icon, text} : propsType) {
    return <div className="flex gap-4 text-lg font-light items-center py-2 sm:hover:bg-slate-100 hover:cursor-pointer transition-all justify-center sm:justify-start sm:pl-6">
        <div>{icon}</div>
        <div className="hidden sm:inline">{text}</div>

    </div>
}