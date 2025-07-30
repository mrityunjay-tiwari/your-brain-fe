import { UserIcon } from "../../icons/userIcon"

interface propType {
    siz? : number,
    siz2? : number,
    opendialogbox? : () => void
}
export function UserDropDown({siz,siz2, opendialogbox} : propType) {
    return <div className={`size-${siz} sm:size-${siz2} rounded-full bg-slate-200 flex items-center justify-center hover:scale-105 hover:cursor-pointer hover:-translate-y-0.5 transition-all`} onClick={opendialogbox}>
        <div className="p-2"><UserIcon siz={4} siz2={6} /></div>
    </div>
}

