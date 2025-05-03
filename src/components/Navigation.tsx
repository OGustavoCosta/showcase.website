import { Menu, X } from "lucide-react"
import { useRef } from "react"

function Navigation(){  
    const navRef = useRef<HTMLDivElement>(null)
    
    const ToggleNavigation = () => {
        if(navRef.current){
            return navRef.current.classList.toggle('is-active')
        }
    }

    return(
        <nav className=" nav max-w-7xl font-pixelify-medium text-xl flex justify-between text-dark">
            <div className="nav__mobile-icon inline-block lg:hidden cursor-pointer" onClick={ToggleNavigation}>
                <Menu size={25} strokeWidth={1} />
            </div>
            <h1 className="nav__title">Gustavo Costa</h1>
            <ul className="nav__list">
                <li className="nav__item"><a href="#inicio" className="nav__link">Início</a></li>
                <li className="nav__item"><a href="#tecnologias" className="nav__link">Tecnologias</a></li>
                <li className="nav__item"><a href="#projetos" className="nav__link">Projetos</a></li>
                <li className="nav__item"><a href="#servicos" className="nav__link">Serviços</a></li>
                <li className="nav__item"><a href="#contato" className="nav__link">Contato</a></li>
            </ul>
            <div ref={navRef} className="nav__mobile-nav lg:hidden">
                <div className="nav__mobile-icon inline-block cursor-pointer" onClick={ToggleNavigation}>
                    <X size={25} strokeWidth={2} />
                </div>
                <ul className="nav__list">
                    <li className="nav__item"><a href="#inicio" className="nav__link" onClick={ToggleNavigation}>Início</a></li>
                    <li className="nav__item" onClick={ToggleNavigation}><a href="#tecnologias" className="nav__link">Tecnologias</a></li>
                    <li className="nav__item" onClick={ToggleNavigation}><a href="#projetos" className="nav__link">Projetos</a></li>
                    <li className="nav__item" onClick={ToggleNavigation}><a href="#servicos" className="nav__link">Serviços</a></li>
                    <li className="nav__item" onClick={ToggleNavigation}><a href="#contato" className="nav__link">Contato</a></li>
                </ul>
                <p className="text-sm py-5 text-dark">Copyright © 2025. Gustavo Costa. Todos os direitos reservados.</p>
            </div>
        </nav>
    )
}

export default Navigation