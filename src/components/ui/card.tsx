import { useEffect, useState } from "react";
import { BrainIcon } from "../../icons/brainIcon"
import { DeleteIcon } from "../../icons/deleteIcon"
import { ShareIcon2 } from "../../icons/shareIcon2"
import { DeleteBox } from "./deleteBox";


interface propsType {
    title?: string,
    description: string,
    link: string,
    type: "youtube" | "tweet",
    deleteCard?: () => void,
    onclickfn?: () => void,
    openShareBox?: () => void,
    controls?: boolean
}


export function ContentCard({title,description, link, type, deleteCard, onclickfn, openShareBox, controls} : propsType){
    const [deletePopupOpen, setDeletePopupOpen] = useState(false);
    

    // function getVideoLink(link : string) {

    //     let trimmedLink = "";

    //    if(link.includes("youtu.be")) {
    //         trimmedLink = link.split("/")[1]
    //     }
    //     console.log(trimmedLink);
        
    //     return `https://www.youtube.com/embed/${trimmedLink}`
    // }

    useEffect(() => {
    const twttr = (window as any).twttr;
    if (type === "tweet" && twttr?.widgets?.load) {
        twttr.widgets.load();
    }
    }, [type, link]);
    
    return <div>
        <DeleteBox open={deletePopupOpen} onClose={() => {setDeletePopupOpen(c=>!c)}} />

        <div className="w-64 sm:w-96 p-4 sm:p-7 shadow-md border rounded-xl max-h-min bg-white" onClick={onclickfn}>

        <div className={`flex justify-between items-center mb-2`}>
            <div className="gap-2 flex text-xl sm:text-2xl items-center">
                <BrainIcon siz={6}/>
                <div className="text-zinc-700 font-medium line-clamp-1">{title}</div>
            </div>
            {controls && <div className="gap-2 flex items-center">
                <span onClick={openShareBox}><ShareIcon2/></span>
                <span onClick={deleteCard}><DeleteIcon siz={4} /></span>
            </div>}
        </div> 
        <div className="text-zinc-600 font-normal line-clamp-1 sm:line-clamp-2">
            {description}
        </div>
        <div className="flex overflow-auto">
            {type === "tweet" && (
                <blockquote className="twitter-tweet">
                    <a href={link.replace("x", "twitter")}></a>
                </blockquote>
          )}
          {type === "youtube" && (
            <iframe
              src={link.replace("https://youtu.be/" , "https://www.youtube.com/embed/")}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="video"
            />
          )}
        </div>
    </div>
    </div>
}

// title
// description
// embedded link