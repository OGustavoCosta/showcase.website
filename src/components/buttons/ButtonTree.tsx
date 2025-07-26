function ButtonTree(props: any){
    return(
        <a target="_blank" className="button button--tree border-2 border-light max-w-[300px] w-full flex justify-center gap-2.5 p-3.5" href={props.link}>
            {props.icon}
            <p>{props.text}</p>
        </a>
    )
}

export default ButtonTree