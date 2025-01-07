import { useSelector } from "react-redux";

const TechnologyIcons = (projectTechnology) => {
        return(
            <div>
                {projectTechnology.map(tech => (
                    <div>{tech}</div>
                ))}
            </div>
        )
};


const MainCardBottom = () => {
    const projectCarousel = useSelector((state) => state.projectCarousel);
    const currentProject = projectCarousel.items[projectCarousel.index];

    return(
        <div className='card-bottom'>
            <div>{currentProject.projectSubtext}</div>
            <div>{currentProject.projectDescriptionNew}</div>
            <div>
                
            </div>
        </div>
    )
}

export default MainCardBottom;