import { useSelector } from "react-redux";
import IconDisplay from "./IconDisplay";

import "./MainCardBottom.css"

const MainCardBottom = () => {
    const projectCarousel = useSelector((state) => state.projectCarousel);
    const currentProject = projectCarousel.items[projectCarousel.index];

    return(
        <div className='card-bottom'>
            <div className="test">
                {currentProject.projectSubtext}
            </div>
            <div className="test">
                {currentProject.projectDescriptionNew}
            </div>
            <div className="test">
                <IconDisplay/>
            </div>
        </div>
    )
}

export default MainCardBottom;