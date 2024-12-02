import { useSelector } from "react-redux";

const MainCardBottom = () => {
    const projectInfo = useSelector((state) => state.projectsInfo.value);

    // console.log(projectInfo);

    return(
        <div className='card-bottom'>
            <div>{`${projectInfo.projectName}`}</div>
            <div>test</div>
            <div>test</div>
        </div>
    )
}

export default MainCardBottom;