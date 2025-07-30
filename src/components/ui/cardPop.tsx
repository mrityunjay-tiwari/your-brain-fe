import { useEffect } from "react";
import { BrainIcon } from "../../icons/brainIcon";
import { DeleteIcon } from "../../icons/deleteIcon";
import { ShareIcon2 } from "../../icons/shareIcon2";
import { CloseIcon } from "../../icons/closeIcon";
import { EditIcon } from "../../icons/editIcon";

interface propsType {
  title?: string;
  description?: string;
  link?: string;
  type?: "youtube" | "tweet";
  deleteCard?: () => void;
  open?: boolean;
  onClose?: () => void;
  editContentCard?: () => void,
  controls: boolean
}

export function ContentCardPopped({
  title,
  description,
  link,
  type,
  deleteCard,
  open,
  onClose,
  editContentCard,
  controls
}: propsType) 
{
    
    useEffect(() => {
        const twttr = (window as any).twttr;
        if (type === "tweet" && twttr?.widgets?.load) {
            twttr.widgets.load();
        }
        }, [type, link]);
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-700/70 fixed top-0 left-0 justify-center flex z-10">
          <div className="flex flex-col justify-center items-center">

                <div className="flex items-center justify-center h-full">
                <div className="w-[20rem] sm:w-[35rem] p-7 shadow-md border rounded-xl max-h-min bg-white h-4/5 overflow-scroll">
                    <div>
                        <div className={`flex justify-between items-start mb-2`}>
                    <div className="gap-2 flex text-xl sm:text-2xl items-start">
                        <BrainIcon siz={6} />
                        <div className="text-zinc-700 font-medium">
                        {title}
                        </div>
                    </div>
                    {controls && <div className="gap-2 flex items-center" >
                        <span onClick={editContentCard}>
                            <EditIcon siz={4} />
                        </span>
                        <ShareIcon2 />
                        <span onClick={deleteCard}>
                        <DeleteIcon siz={4} />
                        </span>
                        <div onClick={onClose}><CloseIcon /></div>
                    </div>}
                    </div>
                    
                    <div className="text-zinc-600 font-normal">
                    {description}
                    </div>
                    <div className="flex">
                    {type === "tweet" && (
                        <blockquote className="twitter-tweet">
                        <a href={link?.replace("x", "twitter")}></a>
                        </blockquote>
                    )}
                    {type === "youtube" && (
                        <iframe
                        src={link?.replace("watch", "embed")}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        title="video"
                        />
                    )}
                    </div>
                    </div>
                </div>
                </div>

          </div>
        </div>
      )}
    </div>
  );
}
