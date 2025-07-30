import { useEffect, useRef, useState } from "react";
import { PlusIcon } from "../../icons/plusIcon";
import { ShareIcon } from "../../icons/shareIcon";
import { Button } from "./button";
import { SideBar } from "./sideBar";
import { ContentCard } from "./card";
import { ShareModel } from "./shareModel";
import { useContent } from "../../hooks/useContent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDropDown } from "./userDropDown";
import { DropDown } from "./dropDown";
import { ContentCardPopped } from "./cardPop";
import { ShareBox } from "./shareBox";
import { ShareBoxIndividual } from "./shareBoxIndividual";
import { SearchInputBox } from "./searchInputBox";
import { SearchIconBox } from "./searchIconBox";
import { useSearchContent } from "../../hooks/useSearchContent";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface propsType {
    title?: string,
    description: string,
    link: string,
    type: "youtube" | "tweet",
    _id: string
}

// @ts-ignore
enum contentType {
    home,
    tweet,
    youtube,
    blog,
    searchResults
}

export function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("token");

        if(!isLoggedIn){
            navigate('/')
        }
    },[])

    const [openModel, setOpenModel] = useState(false)
    const [popCard, setPopCard] = useState(false)
    const [editInput, setEditInput] = useState(false);
    const [selectiveRendering, setSelectiveRendering] = useState<contentType | null>(null);
    const [openUserDetails, setOpenUserDetails] = useState(false);
    const [individualContentId, setIndividualContentId] = useState<string>();
    const [openShareDialogBox, setOpenShareDialogBox] = useState(false);
    const [individualShareDialogBox, setIndividualShareDialogBox] = useState(false);

    const {content, tweets, yoututbeContent} = useContent();

    async function deletefn(contentId: string){
            await axios.delete(`${BACKEND_URL}/api/v1/delete/${contentId}`,{
                headers: {
                    "token": localStorage.getItem("token")
                }
            }
        );
        console.log('deleted');
    }


    const [granularData, setGranularData] = useState<propsType>();
    async function getIndividualContentfn(contentId: string){
        const response = await axios.get(`${BACKEND_URL}/api/v1/contents/${contentId}`,{
            headers: {
                "token": localStorage.getItem("token")
            }
        })

        const data = response.data as {granularContent: any}
        setGranularData(data.granularContent)
        console.log(data.granularContent);
        setIndividualContentId(data.granularContent._id)
        console.log(`_id is ${data.granularContent._id}`);
        
        if(!editInput){
            setPopCard(c => !c)
        }
    }
    // function selectiveRenderfn(){
    //     if(selectiveRendering === null){
    //         setSelectiveRendering(true)
    //     } else {
    //         setSelectiveRendering(prev => !prev)
    //     }
    // }

    function editInputBoxfn() {
        setEditInput(c => !c)
    }

    function onclose() {
        return () => {setOpenModel(c=>!c)}
    }

    const mainRef = useRef<HTMLInputElement>(null)
    const shareModelRef = useRef<HTMLInputElement>(null)

    const [contentId, setContentId] = useState<string>('')

    const [searchQuery, setSearchQuery] = useState("");
    const searchInputRef = useRef<HTMLInputElement>(null);    
    const { searchedContent } = useSearchContent({searchBoxInput : searchQuery})
    
    function handleSearch() {
        const searchInputValue = searchInputRef.current?.value?.trim() ?? "";
        if (searchInputValue === "") {        
            return;
        }
        setSearchQuery(searchInputValue) 
        setSelectiveRendering(contentType.searchResults)

        if(searchedContent == null){
            console.log('no content');
            
        }
        console.log("input value",searchInputValue);
        console.log("selectiverendering",selectiveRendering);
        console.log( "from dashboard" ,searchedContent);
                    
    }

    return <div className="h-screen w-screen flex overflow-hidden">
        <ShareModel refer={shareModelRef} mainref={mainRef} open={openModel} onClose={onclose()} />
        <ShareModel open={editInput} onClose={() => {setEditInput(c=> !c)}} contentId={individualContentId} defaultdescription={granularData?.description} defaultlink={granularData?.link} defaulttitle={granularData?.title} onupdate={() => getIndividualContentfn(individualContentId!)} />
        <ContentCardPopped controls={true} open={popCard} onClose={() => {setPopCard(c => !c)}} description={granularData?.description} link={granularData?.link} type={granularData?.type} title={granularData?.title} editContentCard={() => {editInputBoxfn()}} />
        <ShareBox open={openShareDialogBox} onClose={() => {setOpenShareDialogBox(c => !c)}} />
        { individualShareDialogBox && contentId && 
         (<ShareBoxIndividual open={individualShareDialogBox} onClose={() => {setIndividualShareDialogBox(c => !c)}} contentId={contentId} />
        )}

        <div className="w-1/6 h-full "><SideBar seletedRenderX={() => {setSelectiveRendering(contentType.tweet)}} seletedRenderYoutube={() => {setSelectiveRendering(contentType.youtube)}} seletedRenderHome={() => {setSelectiveRendering(contentType.home)}} customClassname={((selectiveRendering == (contentType.home)) || (selectiveRendering == null)) ? "bg-slate-200" : "bg-white"} customClassnameYT={selectiveRendering == contentType.youtube ? "bg-slate-200" : "bg-white"} customClassnameX={selectiveRendering == contentType.tweet ? "bg-slate-200" : "bg-white"} /></div>
        
        <div className="flex-1 bg-slate-100 p-6 flex flex-col gap-6 overflow-hidden">
            <div className="flex gap-4 justify-end items-center">
                <div className="flex items-center h-10">
                    <SearchInputBox reference={searchInputRef} onEnterPress={handleSearch} /> 
                    <div onClick={handleSearch} className="h-10"> <SearchIconBox /> </div>
                </div>
                <Button text="Share Brain" variant="primary" startIcon={<ShareIcon siz={6}/>} onclick={() => setOpenShareDialogBox(c => !c)} /> 
                <Button text='Add Content' variant='secondary' startIcon={<PlusIcon siz={6}/>} onclick={() => setOpenModel(c => !c)}/>
                <UserDropDown siz={10} key={1} opendialogbox={() => setOpenUserDetails(c => !c)}/>
            </div>
            <div className="flex flex-col items-end">{openUserDetails && <DropDown />} </div>
            <div className="flex gap-4 overflow-auto h-full">

                    {(selectiveRendering == null) && content?.map((ct : propsType) => {
                    return <ContentCard controls={true} onclickfn={() => {getIndividualContentfn(ct._id)}} description={ct.description} link={ct.link} type={ct.type} title={ct.title} key={ct._id} deleteCard={() => {deletefn(ct._id)}} openShareBox={() => {setContentId(ct._id); setIndividualShareDialogBox(c => !c)}}/>
                })}
                    {(selectiveRendering == contentType.home) && content?.map((ct : propsType) => {
                    return <ContentCard controls={true} onclickfn={() => {getIndividualContentfn(ct._id)}} description={ct.description} link={ct.link} type={ct.type} title={ct.title} key={ct._id} deleteCard={() => {deletefn(ct._id)}} openShareBox={() => {setContentId(ct._id); setIndividualShareDialogBox(c => !c)}}/>
                })}
                    {(selectiveRendering === contentType.tweet) && tweets?.map((ct : propsType) => {
                    return <ContentCard controls={true} onclickfn={() => {getIndividualContentfn(ct._id)}} description={ct.description} link={ct.link} type={ct.type} title={ct.title} key={ct._id} deleteCard={() => {deletefn(ct._id)}} openShareBox={() => {setContentId(ct._id); setIndividualShareDialogBox(c => !c)}}/>
                })}
                    {(selectiveRendering === contentType.youtube) && yoututbeContent?.map((ct : propsType) => {
                    return <ContentCard controls={true} onclickfn={() => {getIndividualContentfn(ct._id)}} description={ct.description} link={ct.link} type={ct.type} title={ct.title} key={ct._id} deleteCard={() => {deletefn(ct._id)}} openShareBox={() => {setContentId(ct._id); setIndividualShareDialogBox(c => !c)}}/>
                })}
                    {(selectiveRendering === contentType.searchResults) && searchedContent?.map((ct : propsType) => {
                    return <ContentCard controls={true} onclickfn={() => {getIndividualContentfn(ct._id)}} description={ct.description} link={ct.link} type={ct.type} title={ct.title} key={ct._id} deleteCard={() => {deletefn(ct._id)}} openShareBox={() => {setContentId(ct._id); setIndividualShareDialogBox(c => !c)}}/>
                })}
                
            </div>
        </div>

    </div>
}