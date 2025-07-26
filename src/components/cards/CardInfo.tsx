interface IContent{
    id: number,
    title: string,
    banner?: string,
    altBanner?: string,
    texts: string[],
    skillIcons?: React.ReactNode[],
}

function CardInfo({content}: {content: IContent}){
    const {title, banner, altBanner, texts, skillIcons} = content
    return(
        <div className="card card--info">
            <header className="card__header ">
                <img className="card__icon" src={banner} alt={`imagem de um/uma ${altBanner}`} />
                <h2 className="card__title break-keep">{title}</h2>
            </header>
            <div className="card__content">
                {texts.map(text => (
                    <p className="card__text" dangerouslySetInnerHTML={{__html: text}}></p>
                ))}
            </div>
            {
            skillIcons && 
            <div className="card__icons flex gap-1 flex-wrap">
                {skillIcons.map(icon => (
                    icon
                ))}
            </div>
            }
        </div>
    )
}

export default CardInfo