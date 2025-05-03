import Footer from "../components/Footer"
import ButtonTree from "../components/ButtonTree"
import { AppWindow, FileUser, Github, Instagram, Linkedin, Smartphone } from "lucide-react"

function LinkTreePage(){
    return(
        <div className="grid grid-rows-default w-full min-h-screen text-light bg-background-light">
            <header className="header grid justify-items-center max-h-[420px]">
                <div className="header__banner w-full h-35 md:h-56 bg-background-dark overflow-hidden">
                    <img className="object-cover w-full h-full" src="images/banners/linktree/IMG_1637.JPG" alt="" />
                </div>
                <div className="header__profile translate-y-[-40%] grid justify-items-center gap-4">
                    <div className="header__picture w-35 md:w-50 aspect-square bg-background-dark overflow-hidden rounded-full">
                        <img className="w-full h-full object-cover" src="images/profile/perfil-1080.png" alt="" />
                    </div>
                    <div className="header__content">
                        <h1 className="header__title uppercase text-2xl font-argentum-bold text-center">Gustavo Costa</h1>
                        <p className="header__description text-center text-sm text-dark">Desenvolvedor Web</p>
                    </div>
                </div>
            </header>
            <main className="main uppercase">
                {/* Portfolio */}
                <section className="main__background bg-background-light">
                    <section className="section grid justify-items-center gap-3.5 py-5">
                        <h2 className="section__title">Conheça Meu Trabalho</h2>
                        <div className="section__options grid gap-4">
                            <ButtonTree key={1} icon={(<AppWindow />)} text={'Portfolio Web'} link={'https://www.gustavocosta.me/'}/>
                            <ButtonTree key={2} icon={(<Linkedin />)} text={'Linkedin'} link={'https://www.linkedin.com/in/gustavosncosta/'}/>
                            <ButtonTree key={3} icon={(<Github />)} text={'GitHub'} link={'https://github.com/OGustavoCosta'}/>
                        </div>
                    </section>
                </section>

                {/* Currículo */}
                <section className="main__background bg-background-light is-hidden">
                    <section className="section grid justify-items-center gap-3.5 py-5">
                        <h2 className="section__title">Currículo</h2>
                        <div className="section__options grid gap-4">
                            <ButtonTree key={4} icon={(<FileUser />)} text={'Currículo'} link={'https://drive.google.com/file/d/1KDHo2yLfdbHw93YULkb-xzKn0GOWRqqb/view?usp=sharing'}/>
                            <ButtonTree key={5} icon={(<FileUser />)} text={'Curriculo Lattes'} link={'http://lattes.cnpq.br/4638970324861784'}/>
                        </div>
                    </section>
                </section>

                {/* Contato */}
                <section className="main__background bg-background-light">
                    <section className="section grid justify-items-center gap-3.5 pt-5 pb-30">
                        <h2 className="section__title">Entre Em Contato</h2>
                        <div className="section__options grid gap-4">
                            <ButtonTree key={6} icon={(<Smartphone />)} text={'WhatsApp'} link={'https://wa.me/+5577999199124?text=Ol%C3%A1%20Gustavo!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!'}/>
                            <ButtonTree key={7} icon={(<Instagram />)} text={'Instagram'} link={'https://www.instagram.com/gustavocosta.dev/'}/>
                        </div>
                    </section>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default LinkTreePage