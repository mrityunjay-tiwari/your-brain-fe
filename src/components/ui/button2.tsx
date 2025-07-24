import type { ReactElement } from "react"

interface ButtonProps {
    variant: "primary" | "secondary",
    size?: "sm" |"md" | "lg",
    text?: string,
    startIcon?: ReactElement, // this should be ReactElement
    endIcon?: ReactElement,
    onclick?: () => void
}

const variantStyle = {
  primary:
    "bg-[#dee3fb] text-[#4C5FD5] font-medium rounded px-7 py-2 flex items-center justify-center gap-1 hover:bg-[#4844D7] hover:text-white transition-all duration-300 transform hover:scale-105 ",
  secondary:
    "bg-[#4844D7] text-white font-medium rounded px-3.5 py-1.5 flex items-center gap-1",
}



export const Button2 = (props : ButtonProps) => {
    return <button className={`${variantStyle[props.variant]}`} onClick={props.onclick}>{props.startIcon} {props.text} {props.endIcon} </button>
}