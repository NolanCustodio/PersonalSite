import { useSelector } from 'react-redux';
import { useState } from 'react';

import SingleResource from '../Resources/SingleResource';
import resumePath from '../Resume/NolanLeyCustodioResume.pdf';
import SingleProjectBlock from '../Projects/Block/SingleProjectBlock';

import './Overlay.css';

export default function Overlay(){
    const [project, setProject] = useState('portfolio');

    const projects = useSelector((state) => state.project.value);
    console.log(Object.keys(projects).filter(key => 
        key.includes(project)));

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
                        <button>left</button>
                        <div>
                            <h2>Projects</h2>
                            <SingleProjectBlock project={projects.portfolio}/>
                        </div>
                        <button>right</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



