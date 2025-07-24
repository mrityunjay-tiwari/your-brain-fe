import type { ReactElement } from "react"

interface propsType{
    icon: ReactElement,
    text: string
}
export function SideBarElement({icon, text} : propsType) {
    return <div className="flex gap-4 text-lg font-light items-center py-2 hover:bg-slate-100 hover:cursor-pointer transition-all pl-6">
        <div>{icon}</div>
        <div>{text}</div>

    </div>
}