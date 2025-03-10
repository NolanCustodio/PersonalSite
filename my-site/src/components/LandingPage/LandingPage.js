import MainCardTop from './MainCardSections/MainCardTop/MainCardTop';
import MainCardBottom from './MainCardSections/MainCardBottom/MainCardBottom';

import './LandingPage.css';

export default function Overlay(){

    return(
        <div>
            <div className='main-card'>
                <MainCardTop/>
                <MainCardBottom/>
            </div>
        </div>
    )
}