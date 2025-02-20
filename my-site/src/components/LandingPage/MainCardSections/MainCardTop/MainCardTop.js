import SingleResource from './Resources/SingleResource';
import resumePath from '../../../Resume/NolanLeyCustodioResume.pdf';
import ProjectCarrousel from "./ProjectCarrousel/ProjectCarrousel";


import "./MainCardTop.css"
import "./TopRightQuadrant.css"

const MainCardTop = () => {
    
    return (
        <div className='card-top'>
            <div className='landing-left'>
                <SingleResource link="https://github.com/NolanCustodio" name="Github" />
                <SingleResource link={resumePath} name="Resume" />
            </div>
            <ProjectCarrousel/>
        </div>
    )
}

export default MainCardTop;