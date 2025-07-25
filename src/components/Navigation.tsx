import { Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function Navigation(){  
    const navRef = useRef<HTMLDivElement>(null)
    
    const ToggleNavigation = () => {
        if(navRef.current){
            return navRef.current.classList.toggle('is-active')
        }
    }

    /* Scroll */
    const [scrollNav, setScrollNav] = useState(window.scrollY > 1)

    useEffect(() => {
        const handleScroll = () => {
            setScrollNav(window.scrollY > 1)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return(
        <header className={`header header--navigation py-5 fixed z-5 before:bg-linear-to-t before:to-black before:w-full before:absolute before:top-0 before:left-0 before:transition-all before:duration-500 before:border-gray-950 ${false == scrollNav ? 'before:opacity-0' : 'before:h-[5rem] before:opacity-100 before:border-[0px] before:backdrop-blur-sm before:mask-b-from-50% before:mask-b-to-100%'}`}>
            <nav className="nav font-pixelify text-xl flex justify-between text-dark z-5">
                <div className="nav__mobile-icon inline-block lg:hidden cursor-pointer" onClick={ToggleNavigation}>
                    <Menu size={25} strokeWidth={1} />
                </div>
                <h1 className="nav__title">Gustavo Costa</h1>
                <ul className={`nav__list gap-5 hidden lg:flex`}>
                    <li className="nav__item"><a href="#inicio" className="nav__link underline-animation before:bg-dark">Início</a></li>
                    <li className="nav__item"><a href="#tecnologias" className="nav__link underline-animation before:bg-dark">Tecnologias</a></li>
                    <li className="nav__item"><a href="#projetos" className="nav__link underline-animation before:bg-dark">Projetos</a></li>
                    <li className="nav__item"><a href="#servicos" className="nav__link underline-animation before:bg-dark">Serviços</a></li>
                    <li className="nav__item"><a href="#contato" className="nav__link underline-animation before:bg-dark">Contato</a></li>
                </ul>

                {/* Mobile */}
                <div ref={navRef} className="nav__mobile lg:hidden bg-light text-background-dark top-0 left-0 h-lvh w-[90vw] px-[5%] py-5 grid grid-rows-[auto_1fr_auto] gap-8 fixed -translate-x-[90vw] transition-all duration-500">
                    <div className="nav__mobile-icon inline-block cursor-pointer" onClick={ToggleNavigation}>
                        <X size={25} strokeWidth={2} />
                    </div>
                    <ul className="nav__list flex flex-col gap-4">
                        <li className="nav__item"><a href="#inicio" className="nav__link" onClick={ToggleNavigation}>Início</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#tecnologias" className="nav__link">Tecnologias</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#projetos" className="nav__link">Projetos</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#servicos" className="nav__link">Serviços</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#contato" className="nav__link">Contato</a></li>
                    </ul>
                    <p className="text-sm py-5 text-dark">Copyright © 2025. Gustavo Costa. Todos os direitos reservados.</p>
                </div>
            </nav>
        </header>
    )
}

export default Navigation