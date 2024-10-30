import MainCardTop from './MainCardSections/MainCardTop/MainCardTop';
import MainCardBottom from './MainCardSections/MainCardBottom/MainCardBottom';

import './Overlay.css';

export default function Overlay(){

    return(
        <div>
            <h1>Nolan Ley Custodio</h1>
            <div className='main-card'>
                <MainCardTop/>
                <MainCardBottom/>
            </div>
        </div>
    )
}



