import { ChevronRight } from 'lucide-react';

function CardProject(props: any){
    return(
        <a target='_blank' href={props.link} className="card card--project cursor-pointer">
            <div className="card__banner">
                <span className=" w-full h-full absolute block  shadow-inset-custom"></span>
                <img src={props.banner} alt={props.bannerAlt} />
            </div>
            <div className="card__details bg-light text-background-dark py-2.5 px-1.5">
                <h2 className='font-argentum-bold text-base/tight'>{props.title}</h2>
                <p className='flex text-xs font-argentum-light items-center'>Visualizar Projeto <ChevronRight strokeWidth={1} size={15} /></p>
            </div>
        </a>
    )
}

export default CardProject