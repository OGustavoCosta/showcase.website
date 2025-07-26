/* Hooks */
import { useState } from "react"

/* Components */
import CardInfo from "../../components/cards/CardInfo"

/* Icons */
import { CgFigma } from "react-icons/cg"
import { SiAdobephotoshop, SiDjango, SiFastify } from "react-icons/si"
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaPhp, FaReact, FaSass } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi"

interface ISkills{
    id: number,
    title: string,
    banner: string,
    altBanner: string,
    texts: string[],
    skillIcons: React.ReactNode[],
}

function HomeSkills(){
    const [iconSize] = useState<number>(30)

    const [skills] = useState<ISkills[]>([
        {
            id: 1,
            title: 'UI/UX Design',
            banner: 'icons/wireframe.svg',
            altBanner: 'wireframe',
            texts: [
                'Apaixonado em UI/UX. Crio interfaces no <strong>Figma</strong>, com suporte do <strong>Photoshop</strong>. Atualmente, estou aprendendo <strong>Illustrator</strong> para aprimorar meu processo de design.'
            ],
            skillIcons: [
                <CgFigma size={iconSize} />,
                <SiAdobephotoshop size={iconSize} />
            ]
        },
        {
            id: 2,
            title: 'Desenvolvimento Front-End',
            banner: 'icons/desktop-code.svg',
            altBanner: 'Desktop code',
            texts: [
                'Desenvolvo interfaces modernas e responsivas utilizando <strong>HTML</strong>, <strong>CSS</strong>, <strong>SASS</strong>, <strong>JS</strong> e <strong>TailWind</strong>. Atualmente, estou aprimorando minhas habilidades em <strong>React</strong>.'
            ],
            skillIcons: [
                <FaJsSquare size={iconSize} />,
                <FaHtml5 size={iconSize} />,
                <FaCss3Alt size={iconSize} />,
                <RiTailwindCssFill size={iconSize} />,
                <FaSass size={iconSize} />,
                <FaReact size={iconSize} />
            ]
        },
        {
            id: 3,
            title: 'Desenvolvimento Back-End',
            banner: 'icons/server.svg',
            altBanner: 'server',
            texts: [
                'Especializado em <strong>APIs REST</strong> com <strong>Node.js</strong> usando <strong>PostgreSQL</strong> e o framework <strong>Fastify</strong>. Tenho conhecimentos em <strong>Django</strong> e <strong>PHP</strong>, embora não os utilize com frequência. Atualmente, estou aprendendo <strong>TypeScript</strong>.'
            ],
            skillIcons: [
                <FaNodeJs size={iconSize} />,
                <SiFastify size={iconSize} />,
                <SiDjango size={iconSize} />,
                <FaPhp size={iconSize} />,
                <BiLogoTypescript size={iconSize} />,
                <BiLogoPostgresql size={iconSize} />
            ]
        }
    ]) 
    
    return(
        <section className="section__cards flex justify-center flex-wrap">
            {skills.map((skill) => (
                <CardInfo key={skill.id} content={skill}/>
            ))}                      
        </section>
    )
}

export default HomeSkills