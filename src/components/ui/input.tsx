import type React from "react"

interface propsType {
    content : string,
    reference?: React.RefObject<HTMLInputElement | null>,
    defaultvalue? : string,
    onchange? :React.ChangeEventHandler<HTMLInputElement>
}

export function InputBox(props : propsType){
    return <div>
        <input onChange={props.onchange} defaultValue={props.defaultvalue} ref={props.reference} type="text" placeholder={`${props.content}`} className="border-2 w-full p-2 rounded-lg shadow-sm my-2"/>
    </div>
}