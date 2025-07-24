import type React from "react"

interface propsType {
    name: string,
    contentType?: "tweet" | "youtube",
    checkedd?: boolean,
    selectType?: () => void,
    reference?: React.RefObject<HTMLInputElement|null>
}
export function InputCheckbox({name,contentType, checkedd, selectType, reference} : propsType) {
    return <div className="flex items-center justify-end gap-1" onClick={selectType}>
        <input ref={reference} id={contentType} type="checkbox" checked={checkedd} className="rounded-fullpeer h-4 w-4 cursor-pointer transition-all appearance-none rounded-full bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"></input>
        <label htmlFor={contentType} className="font-light"> {name}</label>
    </div>
}