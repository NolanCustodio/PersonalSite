import IconDisplay from "./IconDisplay";

import "./MainCardBottom.css"

const MainCardBottom = () => {
    return(
        <div className='card-bottom'>
            <div className="bottom bottom-left">

                <h1 className="static-text">Nolan Ley Custodio</h1>
                <div>
                    <h2 className="static-text">custodionolan</h2>
                    <h2 className="static-text">@gmail.com</h2>
                </div>
                <h2 className="static-text">Full Stack Developer</h2>
            </div>
            <IconDisplay/>
        </div>
    )
}

export default MainCardBottom;