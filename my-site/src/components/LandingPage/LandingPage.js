//Node modules
import React from 'react';

//My Files
import resumePath from '../Resume/NolanLeyCustodioResume.pdf'
import SingleProjectBlock from '../Projects/SingleProjectBlock';
import ProjectsInfo from '../Projects/ProjectText';



const LandingPage = () => {
    // console.log(ProjectsInfo);

    return(
        <div>
            
            <div className='verticalSpace'/>

            <div>
                {/* Intro and small detail */}
                <h1>
                    Hello, I am Nolan!
                </h1>
                <p>
                    I am a developer and I greatly thank you for taking the time to visit my site.
                </p>
            </div>

            <div className='verticalSpace'/>

            <div className="row justify-content-center">

                <div className="card">
                    <h1 className="col-sm">Github</h1>
                    <div className="card-body">
                        <a href="https://github.com/NolanCustodio" target="_blank" className="card-text stretched-link" rel="noopener noreferrer">
                            Here is a link to my Github.
                        </a>
                    </div>
                </div>

                <div className='horizontalSpace'/>

                
                <div className="card">
                    <h1 className="col-sm">Resume</h1>
                    <div className="card-body">
                        <a href={resumePath} className="card-text stretched-link" target='_blank' rel="noopener noreferrer">
                            Here is a link to my Resume.
                        </a>
                    </div>
                </div>
                

                {/* Github? */}
            
            </div>

            <div className='verticalSpace'/>
            
           <SingleProjectBlock projectName={ProjectsInfo.portfolio.projectName} projectBlurb={ProjectsInfo.portfolio.projectBlurb}/>

            <div className='verticalSpace'/>

            <SingleProjectBlock projectName={ProjectsInfo.newsbox.projectName} projectBlurb={ProjectsInfo.newsbox.projectBlurb}/>

            <div className='verticalSpace'/>

            <SingleProjectBlock projectName={ProjectsInfo.synchat.projectName} projectBlurb={ProjectsInfo.synchat.projectBlurb}/>

            <div className='verticalSpace'/>

        </div>
    )  
}

export default LandingPage;