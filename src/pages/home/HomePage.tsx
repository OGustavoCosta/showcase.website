/* Components */
import CardInfo from "../../components/CardInfo"
import CardProject from "../../components/CardProject"
import Navigation from "../../components/Navigation"

/* Icons */
import { Linkedin, Github, } from "lucide-react"
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaPhp, FaReact, FaSass} from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi"
import { CgFigma } from "react-icons/cg";
import { SiAdobephotoshop, SiDjango, SiFastify } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import Footer from "../../components/Footer"

function HomePage(){
    const iconSize = 30

    return(
        <div className="w-full h-screen text-light bg-amber-00">
            <header className="header header--navigation py-5 absolute z-5">
                <Navigation/>
            </header>
            <main className="main">
                <section className="main__background bg-background-dark">
                    <section id="inicio" className="section section--hero w-full flex justify-center items-center min-h-[600px] relative">
                        <article className="hero flex flex-col items-center cursor-default">
                            <h1 className="hero__title text-dark sm:text-xl uppercase">Desenvolvedor Web</h1>
                            <h2 className="hero__name uppercase lg:text-7xl text-5xl sm:text-6xl font-argentum-bold text-center">Gustavo Costa</h2>
                            <ul className="hero__list sm:text-lg text-sm font-argentum-semibold text-dark">
                                <li className="hero__item">Web Designer</li>
                                <li className="hero__item">Front-End</li>
                                <li className="hero__item">Back-End</li>
                            </ul>
                        </article>
                        <div className="media-container absolute flex gap-2 bottom-5 left-[5%]">
                            <a className="button" target="_blank" href="https://github.com/OGustavoCosta/showcase.website">
                                <Github strokeWidth={1} size={25}/>
                            </a>
                            <a className="button" target="_blank" href="https://www.linkedin.com/in/gustavosncosta">
                                <Linkedin strokeWidth={1} size={25}/>
                            </a>
                        </div>
                    </section>
                </section>

                {/* Expertise (Tecnologias) */}
                <section id="tecnologias" className="main__background bg-background-light">
                    <section className="section pt-10 pb-15 grid justify-center gap-8">
                        <header className="section__header grid justify-center">
                            <h2 className="section__title font-argentum-bold text-5xl text-center">Expertise</h2>
                            <h3 className="section__description text-center text-xl text-dark uppercase">Especialidades e Competências</h3>
                        </header>
                        
                        <section className="section__cards flex justify-center flex-wrap">
                            <CardInfo key={11} title={'UI/UX Design'} icon={'icons/wireframe.svg'} alt={'wireframe'} icons={[(<CgFigma size={iconSize} />), (<SiAdobephotoshop size={iconSize}/>)]}>
                                <p>Apaixonado em UI/UX. Crio interfaces no <strong>Figma</strong>, com suporte do <strong>Photoshop</strong>. Atualmente, estou aprendendo <strong>Illustrator</strong> para aprimorar meu processo de design.</p>
                            </CardInfo>
                            <CardInfo key={12} title={'Desenvolvimento Front-End'} icon={'icons/desktop-code.svg'} alt={'desktop'} icons={[(<FaJsSquare size={iconSize}/>), (<FaHtml5 size={iconSize}/>), (<FaCss3Alt size={iconSize}/>), (<RiTailwindCssFill size={iconSize}/>), (<FaSass size={iconSize}/>), (<FaReact size={iconSize}/>)]}>
                                <p>Desenvolvo interfaces modernas e responsivas utilizando <strong>HTML</strong>, <strong>CSS</strong>, <strong>SASS</strong>, <strong>JS</strong> e <strong>TailWind</strong>. Atualmente, estou aprimorando minhas habilidades em <strong>React</strong>.</p>
                            </CardInfo>
                            <CardInfo key={13} title={`Desenvolvimento Back-End`} icon={'icons/server.svg'} alt={'server'} icons={[(<FaNodeJs size={iconSize}/>), (<SiFastify size={iconSize}/>), (<SiDjango size={iconSize}/>), (<FaPhp size={iconSize}/>), (<BiLogoTypescript size={iconSize}/>), (<BiLogoPostgresql size={iconSize}/>)]}>
                                <p>Especializado em <strong>APIs REST</strong> com <strong>Node.js</strong> usando <strong>PostgreSQL</strong> e o framework <strong>Fastify</strong>. Tenho conhecimentos em <strong>Django</strong> e <strong>PHP</strong>, embora não os utilize com frequência. Atualmente, estou aprendendo <strong>TypeScript</strong>.</p>
                            </CardInfo>
                        </section>
                        <section className="section__button-container flex justify-center">
                            <a target="_blank" href="https://wa.me/+5577999199124?text=Ol%C3%A1%20Gustavo!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!" className="button button--cta">
                                Entre em Contato
                            </a>
                        </section>
                    </section>
                </section>

                {/* Projetos */}
                <section id="projetos" className="main__background bg-background-dark">
                    <section className="section pt-10 pb-15 grid gap-8">
                        <header className="section__header grid w-full">
                            <h2 className="section__title font-argentum-bold text-5xl ">Minha Jornada <strong className="font-argentum-bold">Criativa</strong></h2>
                            <h3 className="section__description text-xl text-dark uppercase"><strong>Aqui estão alguns dos projetos que desenvolvi</strong>, cada um Explorando como a tecnologia e o design se encontram para criar experiências únicas.</h3>
                        </header>
                        <section className="section__cards grid justify-center xmd:grid-cols-2 grid-cols-1 sm:gap-3 gap-5">
                            <div className="section__main-projects ">
                                <CardProject title={'SolarFlow - Software de Gestão Para Empresas de Energia Solar'} banner={'images/banners-projects/solarflow.png'} link={'https://solarflow.com.br/'} bannerAlt={'SolarFlow'}/>
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
                    <header className="section__header grid justify-center">
                            <h2 className="section__title font-argentum-bold text-5xl text-center">Soluções Sob Media</h2>
                            <h3 className="section__description text-center text-xl text-dark uppercase">O que posso realizar por você?</h3>
                        </header>
                        
                        <section className="section__cards flex justify-center flex-wrap gap-5">
                            <CardInfo key={21} title={'Sites e Aplicações Web'} icon={'icons/desktop-code.svg'} alt={'desktop'}>
                                <p><strong>Sites Institucionais:</strong> Criação de websites para empresas, com foco em design moderno e funcionalidade.</p>
                                <p><strong>Landing Pages:</strong> Páginas de conversão otimizadas para captar leads e promover produtos ou serviços.</p>
                                <p><strong>E-commerce:</strong> Desenvolvimento de lojas online personalizadas e responsivas.</p>
                            </CardInfo>
                            <CardInfo key={22} title={'Design de Interfaces (UI/UX)'} icon={'icons/wireframe.svg'} alt={'wireframe'}>
                                <p><strong>Consultoria UX:</strong> Desenvolvimento de wireframes e protótipos no Figma para sites e aplicativos.</p>
                                <p><strong>Landing Pages:</strong> Análise e otimização da experiência do usuário para tornar sites e apps mais intuitivos e eficientes.</p>
                                <p><strong>Design de Interfaces para Web e Mobile:</strong> Criação de layouts e design visual com foco em estética e usabilidade.</p>
                            </CardInfo>
                            <CardInfo  key={23} title={'Manutenção e Suporte de Sites'} icon={'icons/settings.svg'} alt={'settings'}>
                                <p><strong>Suporte Técnico:</strong> Manutenção de sistemas, correção de bugs, e melhorias contínuas em aplicações web.</p>
                                <p><strong>Aprimoramento de Performance:</strong> Melhoria de velocidade e performance de sites e aplicações web.</p>
                                <p><strong>Otimização de SEO:</strong> Melhoramento da visibilidade do seu site em motores de busca (google, bing, etc.)</p>
                            </CardInfo>
                        </section>
                        <section className="section__button-container flex justify-center">
                            <a target="_blank" href="https://wa.me/+5577999199124?text=Ol%C3%A1%20Gustavo!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!" className="button button--cta">
                                Entre em Contato
                            </a>
                        </section>
                    </section>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage