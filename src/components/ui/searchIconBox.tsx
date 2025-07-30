import { SearchIcon } from "../../icons/searchIcon";

export function SearchIconBox() {
    return <div className="flex justify-center items-center border border-l-0 rounded-full rounded-l-none bg-zinc-100 hover:bg-zinc-200 cursor-pointer h-full px-1 sm:px-2">
        <SearchIcon siz={4} />
    </div>
}