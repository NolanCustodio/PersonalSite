//Node modules
import { React } from 'react';
import { useSelector } from 'react-redux';

//My Files
import resumePath from '../Resume/NolanLeyCustodioResume.pdf'
import SingleProjectBlock from '../Projects/Block/SingleProjectBlock';
import SingleResource from '../Resources/SingleResource';

import './LandingPage.css'

const LandingPage = () => {

    const projects = useSelector((state) => state.project.value);

    return(
        <div>

            <div className='intro-block'>
                <h1 className='intro'>
                    Hello, I am Nolan!
                </h1>
                <p className='blurb'>
                    I am a developer and I greatly thank you for taking the time to visit my site.
                </p>
            </div>
            
            <div className='landing-links'>
                <h3 className='section-title'>My Resources</h3>
                <div className="row justify-content-around">
                    <SingleResource link="https://github.com/NolanCustodio" name="Github"/>
                    
                    <SingleResource link={resumePath} name="Resume"/>
                </div>
            </div>            
            <div>
                <h2 className='section-title'>Projects</h2>

                <SingleProjectBlock project={projects.portfolio}/>

                <SingleProjectBlock project={projects.newsbox}/>

                <SingleProjectBlock project={projects.synchat}/>
            </div>
        </div>
    )  
}

export default LandingPage;