import type { ReactElement } from "react"

interface propTypes {
    text: string | undefined,
    icon?: ReactElement
}

export function DropDownUnit({text, icon} : propTypes) {
    return <div className="w-full border p-2 pl-5 pr-16">
        <div className="flex gap-2 items-center">{icon}{text}</div>
    </div>
}