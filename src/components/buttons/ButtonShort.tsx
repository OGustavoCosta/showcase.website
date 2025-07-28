import { ReactNode } from "react"

interface IButtonShortProps{
    link: string,
    icon: ReactNode,
}

function ButtonShort({link, icon}: IButtonShortProps){
    return(
        <a target="_blank" className="button button--short border-[1px] border-light p-2 fill-animation-left-to-right before:bg-light transition-all hover:text-background-dark cursor-pointer flex" href={link}>
            <span className="z-2">{icon}</span>
        </a>
    )
}

export default ButtonShort