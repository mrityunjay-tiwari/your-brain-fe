import axios from "axios";
import { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface propTypes {
    searchBoxInput?: string
}
export function useSearchContent({searchBoxInput} : propTypes) {
    const [searchedContent, setSearchedContent] = useState([]);

    async function searched() {
        const response = await axios.post(`${BACKEND_URL}/api/v1/content/search`,{
             searchQuery: searchBoxInput
        }, {
            headers : {
                token : localStorage.getItem("token") || ""
            }
        })

        const data = response.data as {searchContent : any}

        setSearchedContent(data.searchContent)

        console.log("from the hook", data.searchContent);
        
    }
    
    useEffect(() => {
        if(!searchBoxInput?.trim()) return;
        searched()
    },[searchBoxInput])

    return {
        searchedContent
    }

}