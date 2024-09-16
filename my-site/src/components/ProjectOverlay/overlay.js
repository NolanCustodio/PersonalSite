
import SingleResource from '../Resources/SingleResource';
import resumePath from '../Resume/NolanLeyCustodioResume.pdf';

import './Overlay.css';

export default function Overlay(){

    return(
        <div className='test-box'>
            <div>
                <h1>Nolan Ley Custodio</h1>
                <div className='row landing-external-links'>
                    <SingleResource link="https://github.com/NolanCustodio" name="Github"/>
                    <SingleResource link={resumePath} name="Resume"/>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}



