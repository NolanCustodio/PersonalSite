import { useSelector } from 'react-redux';

import SingleResource from '../Resources/SingleResource';
import resumePath from '../Resume/NolanLeyCustodioResume.pdf';
import SingleProjectBlock from '../Projects/Block/SingleProjectBlock';

import './Overlay.css';

export default function Overlay(){

    const projects = useSelector((state) => state.project.value);

    return(
        <div>
            <h1>Nolan Ley Custodio</h1>
            <div className='main-card'>
                <div className='landing-left'>
                    <div className='landing-external-links'>
                        <SingleResource link="https://github.com/NolanCustodio" name="Github"/>
                        <SingleResource link={resumePath} name="Resume"/>
                    </div>
                    <div>
                        Name
                    </div>
                </div>
                <div className='landing-right'>
                    <div className='scrolling-project-container'>
                        <h2>Projects</h2>
                        <SingleProjectBlock project={projects.portfolio}/>
                        <SingleProjectBlock project={projects.newsbox}/>
                        <SingleProjectBlock project={projects.synchat}/>
                    </div>
                </div>
            </div>
        </div>
    )
}



