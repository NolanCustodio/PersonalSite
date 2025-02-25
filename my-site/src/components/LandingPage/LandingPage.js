import MainCardTop from './MainCardSections/MainCardTop/MainCardTop';
import MainCardBottom from './MainCardSections/MainCardBottom/MainCardBottom';

// import Test from "../test";

import './LandingPage.css';

export default function Overlay(){

    return(
        <div>
            <div className='main-card'>
                <MainCardTop/>
                <MainCardBottom/>
                
                {/* <Test/> */}
            </div>
        </div>
    )
}