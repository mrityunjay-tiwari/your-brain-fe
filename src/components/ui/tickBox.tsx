import { TickIcon } from "../../icons/tickIcon";

export function TickBox(){

    return <div className={`flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 hover:cursor-pointer`}>
        <TickIcon siz={6}/>
    </div>
}