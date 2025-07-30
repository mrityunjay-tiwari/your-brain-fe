import type React from "react"

interface propTypes {
    reference : React.RefObject<HTMLInputElement | null>,
    onEnterPress?: () => void,
}
export function SearchInputBox({reference,onEnterPress} : propTypes) {
    return <div className="h-full flex items-center">
        <input ref={reference} type="text" className="border border-r-0 w-[100px] sm:w-[151px] p-4 rounded-full rounded-r-none h-[32px] sm:h-[40px] py-2" placeholder="Search" 
        onKeyDown={(e) => {
            if(e.key == "Enter") {
                onEnterPress?.()
            } 
        }} 
        />
    </div>
}