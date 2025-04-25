function CardInfo(props: any){
    return(
        <div className="card card--info">
            <header className="card__header ">
                <img className="card__icon" src={props.icon} alt={props.alt} />
                <h2 className="card__title break-keep">{props.title}</h2>
            </header>
            <div className="card__content-container">
                {props.children}
            </div>
            <div className="card__icons flex gap-1 flex-wrap">
                {props.icons}
            </div>
        </div>
    )
}

export default CardInfo