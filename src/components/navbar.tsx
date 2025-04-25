function NavBar(){
    return(
        <nav className="nav max-w-7xl font-pixelify-medium text-xl flex justify-between text-dark">
            <h1 className="nav__title">Gustavo Costa</h1>
            <ul className="nav__list">
                <li className="nav__item"><a href="#inicio" className="nav__link">Início</a></li>
                <li className="nav__item"><a href="#tecnologias" className="nav__link">Tecnologias</a></li>
                <li className="nav__item"><a href="#projetos" className="nav__link">Projetos</a></li>
                <li className="nav__item"><a href="#servicos" className="nav__link">Serviços</a></li>
                <li className="nav__item"><a href="#contato" className="nav__link">Contato</a></li>
            </ul>
        </nav>
    )
}

export default NavBar