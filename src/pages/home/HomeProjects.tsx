import { useState } from "react"

interface ITeam{
    name: string,
    role: string[],
    link: string,
}

interface IDescription{
    title: string,
    banner: string[],
    text: string[],
}

interface ILinks{
    repository: string,
    demo: string,
}

interface IProject{
    id: number,
    title: string,
    type: string,
    team: ITeam[],
    role: string[],
    shortDescription: string,
    description: IDescription[],
    technologies: string[],
    link: ILinks,
    date: string,
    tags: string[]
}

function Homeproject(){
    const [projects] = useState<IProject[]>([
        {
            id: 1,
            title: 'SolarFlow - Software de Gestão Para Empresas de Energia Solar',
            type: 'Colaborativo',
            team: [
                {
                    name: 'Durval Jr.',
                    role: ['Desenvolvedor Back-End'],
                    link: '',
                },
            ],
            role: ['Desenvolvedor Front-End', 'UX/UI Design'],
            shortDescription: '',
            description: [
                {
                    title: 'Visão Geral',
                    banner: ['url-do-banner-ou-imagem.jpg'],
                    text: [
                    'O SolarFlow foi criado para atender empresas do setor de energia solar, oferecendo ferramentas para controle de clientes, contratos, projetos e financeiro.',
                    'Este projeto foi desenvolvido em equipe, utilizando boas práticas de versionamento, integração contínua e metodologias ágeis.',
                    ],
                },
                {
                    title: 'Minhas Contribuições',
                    banner: [],
                    text: [
                    'Implementei o front-end da aplicação usando React e Styled Components.',
                    'Fiz a integração com o backend em Node.js por meio de uma API REST.',
                    'Participei da organização de sprints e code reviews.',
                    ],
                },
            ],
            technologies: ['React', 'Node.js',],
            links: {
                repository: '',
                demo: 'https://solarflow.com.br/'
            },
            date: '',
            tags: ['Sistema Web', 'Energia Solar'],
        }
    ])
    
    return()
}

export default Homeproject