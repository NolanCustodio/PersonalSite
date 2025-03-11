import IconDisplay from "./IconDisplay";
import ProjectCarrousel from "../MainCardTop/ProjectCarrousel/ProjectCarrousel";

import "./MainCardBottom.css"

const MainCardBottom = () => {
    return (
        <div className='card-bottom'>
            <ProjectCarrousel/>
            <IconDisplay />
        </div>
    )
}

export default MainCardBottom;