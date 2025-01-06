import { useSelector } from "react-redux";

const MainCardBottom = () => {
    const projectCarousel = useSelector((state) => state.projectCarousel);
    const currentProject = projectCarousel.items[projectCarousel.index];
    

    return(
        <div className='card-bottom'>
            <div>{currentProject.projectSubtext}</div>
            <div>test</div>
            <div>test</div>
        </div>
    )
}

export default MainCardBottom;