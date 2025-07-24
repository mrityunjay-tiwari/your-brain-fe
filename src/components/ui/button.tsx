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
    "bg-[#dee3fb] text-[#4C5FD5] font-medium rounded px-3.5 py-1.5 flex items-center gap-1 hover:-translate-y-0.5 hover:scale-105 transition-all ",
  secondary:
    "bg-[#4844D7] text-white font-medium rounded px-3.5 py-1.5 flex items-center gap-1 hover:-translate-y-0.5 hover:scale-105 transition-all",
}



export const Button = (props : ButtonProps) => {
    return <button className={`${variantStyle[props.variant]}`} onClick={props.onclick}>{props.startIcon} {props.text} {props.endIcon} </button>
}