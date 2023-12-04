//Node modules
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//My Files
import resumePath from '../Resume/NolanLeyCustodioResume.pdf'
import SingleProjectBlock from '../Projects/Block/SingleProjectBlock';

import './LandingPage.css'

const LandingPage = () => {

    const projects = useSelector((state) => state.project.value);
    // console.log(projects.portfolio);


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
                <div className="row justify-content-around">
                    <div className="card my-card-landing">
                        <h1 className="col-sm link-title">Github</h1>
                        <div className="card-body">
                            <a href="https://github.com/NolanCustodio" target="_blank" className="card-text stretched-link resource-link" rel="noopener noreferrer">
                                Here is a link to my Github.
                            </a>
                        </div>
                    </div>
                    
                    <div className="card my-card-landing">
                        <h1 className="col-sm link-title">Resume</h1>
                        <div className="card-body">
                            <a href={resumePath} className="card-text stretched-link resource-link" target='_blank' rel="noopener noreferrer">
                                Here is a link to my Resume.
                            </a>
                        </div>
                    </div>
                </div>
            </div>            
    
            <SingleProjectBlock project={projects.portfolio}/>

            <SingleProjectBlock project={projects.newsbox}/>

            <SingleProjectBlock project={projects.synchat}/>

        </div>
    )  
}

export default LandingPage;