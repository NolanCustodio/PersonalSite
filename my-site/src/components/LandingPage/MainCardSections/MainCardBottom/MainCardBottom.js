import { useSelector } from "react-redux";
import IconDisplay from "./IconDisplay";



const MainCardBottom = () => {
    const projectCarousel = useSelector((state) => state.projectCarousel);
    const currentProject = projectCarousel.items[projectCarousel.index];

    return(
        <div className='card-bottom'>
            <div>{currentProject.projectSubtext}</div>
            <div>{currentProject.projectDescriptionNew}</div>
            <div>
                <IconDisplay/>
            </div>
        </div>
    )
}

export default MainCardBottom;