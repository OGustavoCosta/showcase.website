function Footer(){
    return(
        <footer id="contato" className="footer bg-background-dark">
            <div className="footer__content-container">
                <div className="footer__content pt-10 lg:pb-10 grid justify-center gap-8 lg:grid-cols-2 grid-cols-1">
                    <div className="footer__cta">
                        <h2 className="footer__title text-3xl">Disponível para oportunidades selecionadas de freelancer</h2>
                        <p className="footer__description uppercase"><strong>Tem um projeto interessante e precisa de ajuda?</strong> Envie-me um e-mail ou entre em contato pelas redes sociais!</p>
                    </div>
                    <   div className="footer__contact flex flex-col lg:items-end items-center justify-end gap-2">
                        <p className="text-left">gustavosncosta@gmail.com</p>
                        <ul className="footer__list font-argentum-light flex gap-2">
                            <li className="footer__item"><a target="_blank" href="https://www.linkedin.com/in/gustavosncosta/" className="footer__link">Linkedin</a></li>
                            <li className="footer__item"><a target="_blank" href="https://www.instagram.com/gustavocosta.me/" className="footer__link">Instagram</a></li>
                            <li className="footer__item"><a target="_blank" href="https://github.com/OGustavoCosta" className="footer__link">Github</a></li>
                            <li className="footer__item"><a target="_blank" href="https://wa.me/+5577999199124?text=Ol%C3%A1%20Gustavo!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!" className="footer__link">Whatsapp</a></li>
                        </ul>
                    </div>
                </div>
                <p className="text-center text-sm px-[5%] py-5 text-dark">Copyright © 2025. Gustavo Costa. Todos os direitos reservados.</p>
            </div>  
        </footer>
    )
}

export default Footer