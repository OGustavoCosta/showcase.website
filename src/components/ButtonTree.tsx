function ButtonTree(props: any){
    return(
        <a target="_blank" className="button button--tree" href={props.link}>
            {props.icon}
            <p>{props.text}</p>
        </a>
    )
}

export default ButtonTree