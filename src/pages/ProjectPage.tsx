interface IDeveloper{
    id: number
    name: string,
    link: string,
}

interface IProject{
    id: number,
    title: string,
    description: string,
    developers: IDeveloper[],
    
}

function ProjectPage({project}: {project: IProject}){
    return(
        
    )
}