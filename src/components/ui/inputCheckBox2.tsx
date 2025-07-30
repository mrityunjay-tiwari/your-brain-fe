import type React from "react"

interface propsType {
    name: string,
    contentType?: "tweet" | "youtube",
    checkedd?: boolean,
    selectType?: () => void,
    reference?: React.RefObject<HTMLInputElement|null>
}
export function InputCheckbox2({name,contentType, checkedd, selectType, reference} : propsType) {
    return <div className="flex items-center justify-end gap-1">
        <input ref={reference} id={contentType} type="checkbox" onChange={selectType} checked={checkedd} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label htmlFor={contentType} className="font-light"> {name}</label>
    </div>
}