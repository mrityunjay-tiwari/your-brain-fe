interface propsType {
    siz : Number,
    siz2?: Number
}

export function PlusIcon(props : propsType){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-${props.siz} sm:size-${props.siz2} hover:cursor-pointer`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

}