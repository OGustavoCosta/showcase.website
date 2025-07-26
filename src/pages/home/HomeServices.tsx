import { useState } from "react";
import CardInfo from "../../components/cards/CardInfo";

function HomeServices(){
    const [services] = useState([
        {
            id: 4,
            title: 'Sites e Aplicações Web',
            banner: 'icons/desktop-code.svg',
            texts: [
                '<strong>Sites Institucionais:</strong> Criação de websites para empresas, com foco em design moderno e funcionalidade.',
                '<strong>Landing Pages:</strong> Páginas de conversão otimizadas para captar leads e promover produtos ou serviços.',
                '<strong>E-commerce:</strong> Desenvolvimento de lojas online personalizadas e responsivas.'
            ]
        },
        {
            id: 5,
            title: 'Design de Interfaces (UI/UX)',
            banner: 'icons/wireframe.svg',
            texts: [
                '<strong>Consultoria UX:</strong> Desenvolvimento de wireframes e protótipos no Figma para sites e aplicativos.',
                '<strong>Landing Pages:</strong> Análise e otimização da experiência do usuário para tornar sites e apps mais intuitivos e eficientes.',
                '<strong>Design de Interfaces para Web e Mobile:</strong> Criação de layouts e design visual com foco em estética e usabilidade.'
            ]
        },
        {
            id: 6,
            title: 'Manutenção e Suporte de Sites',
            banner: 'icons/settings.svg',
            texts: [
                '<strong>Suporte Técnico:</strong> Manutenção de sistemas, correção de bugs, e melhorias contínuas em aplicações web.',
                '<strong>Aprimoramento de Performance:</strong> Melhoria de velocidade e performance de sites e aplicações web.',
                '<strong>Otimização de SEO:</strong> Melhoramento da visibilidade do seu site em motores de busca (google, bing, etc.)'
            ]
        }
    ])

    return(
        <section className="section__cards flex justify-center flex-wrap gap-5">
            {services.map((service) => (
                <CardInfo key={service.id} content={service}/>
            ))}             
        </section>
    )
}

export default HomeServices