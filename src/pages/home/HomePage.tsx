/* Components */
import CardProject from "../../components/cards/CardProject"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import HomeSkills from "./HomeSkills";
import HomeServices from "./HomeServices";

/* Icons */
import { Linkedin, Github, } from "lucide-react"
import ButtonCTA from "../../components/buttons/ButtonCTA";
import ButtonShort from "../../components/buttons/ButtonShort";

function HomePage(){

    return(
        <div className="w-full h-screen text-light font-argentum ">
            <Navigation/>
            <main className="main">
                {/* Hero */}
                <section className="main__background bg-background-dark">
                    <section id="inicio" className="section section--hero w-full flex justify-center items-center min-h-[600px] relative">
                        <article className="hero flex flex-col items-center cursor-default">
                            <h1 className="hero__title text-dark sm uppercase">Desenvolvedor Web</h1>
                            <h2 className="hero__name uppercase lg:text-7xl text-5xl sm:text-6xl font-argentum-bold text-center">Gustavo Costa</h2>
                            <ul className="hero__list text-sm font-argentum text-dark flex gap-5">
                                <li className="hero__item">Web Designer</li>
                                <li className="hero__item">Front-End</li>
                                <li className="hero__item">Back-End</li>
                            </ul>
                        </article>
                        <div className="media-container absolute flex gap-2 bottom-5 left-[5vw]">
                            <ButtonShort link={'https://github.com/OGustavoCosta/showcase.website'} icon={<Github strokeWidth={1} size={25}/>} />
                            <ButtonShort link={'https://www.linkedin.com/in/gustavosncosta'} icon={<Linkedin strokeWidth={1} size={25}/>} />
                        </div>
                    </section>
                </section>

                {/* Expertise (Tecnologias) */}
                <section id="tecnologias" className="main__background bg-background-light">
                    <section className="section pt-10 pb-15 grid justify-center gap-8">
                        <header className="section__header grid gap-0.5 justify-center">
                            <h2 className="section__title font-bold text-4xl md:text-5xl text-center">Expertise</h2>
                            <h3 className="section__description text-center text-dark uppercase">Especialidades e Competências</h3>
                        </header>
                        <HomeSkills/>
                        <section className="section__button flex justify-center">
                            <ButtonCTA/>
                        </section>
                    </section>
                </section>

                {/* Projetos */}
                <section id="projetos" className="main__background bg-background-dark">
                    <section className="section pt-10 pb-15 grid gap-8">
                        <header className="section__header grid gap-0.5 w-full">
                            <h2 className="section__title font-bold text-4xl md:text-5xl ">Minha Jornada <strong className="font-argentum-bold">Criativa</strong></h2>
                            <h3 className="section__description text-dark uppercase"><strong>Aqui estão alguns dos projetos que desenvolvi</strong>, cada um Explorando como a tecnologia e o design se encontram para criar experiências únicas.</h3>
                        </header>
                        <section className="section__cards grid justify-center xmd:grid-cols-2 grid-cols-1 sm:gap-3 gap-5">
                            <div className="section__main-projects ">
                                <CardProject title={'SolarFlow - Software de Gestão Para Empresas de Energia Solar'} banner={'images/banners/projects/solarflow/solarflow.png'} link={'https://solarflow.com.br/'} bannerAlt={'SolarFlow'}/>
                            </div>
                            <div className="section__aside-projects grid sm:grid-cols-2 grid-cols-1 sm:gap-3 gap-5">
                                <CardProject title={'Lorem Ipsum Dolor'}/>
                                <CardProject title={'Lorem Ipsum Dolor'}/>
                                <CardProject title={'Lorem Ipsum Dolor'}/>
                                <CardProject title={'Lorem Ipsum Dolor'}/>
                            </div>
                        </section>
                    </section>
                </section>

                {/* Serviços */}
                <section id="servicos" className="main__background bg-background-light">
                    <section className="section pt-10 pb-15 grid justify-center gap-8">
                    <header className="section__header grid gap-0.5 justify-center">
                            <h2 className="section__title font-bold text-4xl md:text-5xl text-center">Soluções Sob Media</h2>
                            <h3 className="section__description text-center text-dark uppercase">O que posso realizar por você?</h3>
                        </header>
                        
                        <HomeServices/>
                        <section className="section__button-container flex justify-center">
                            <ButtonCTA/>
                        </section>
                    </section>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage