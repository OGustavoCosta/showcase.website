import { ReactNode } from "react"

interface IButtonTreeProps{
    icon: string | ReactNode,
    text: string,
    link: string,
}

function ButtonTree({icon, text, link}: IButtonTreeProps){
    return(
        <a target="_blank" className="button button--tree border-2 border-light max-w-[300px] w-full flex justify-center gap-2.5 p-3.5 fill-animation-left-to-right before:bg-light transition-all hover:text-background-dark cursor-pointer" href={link}>
            <span className="z-2">{icon}</span>
            <p className="z-2">{text}</p>
        </a>
    )
}

export default ButtonTree