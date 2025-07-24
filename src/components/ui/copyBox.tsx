import { CopyIcon } from "../../icons/copyIcon";

export function CopyBox(){

    return <div className={`flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 hover:cursor-pointer`}>
        <CopyIcon siz={6}/>
    </div>
}