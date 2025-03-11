import SingleResource from "./Resources/SingleResource";
import resumePath from "../../../Resume/NolanLeyCustodioResume.pdf"


import "./MainCardTop.css"
import "./TopRightQuadrant.css"

const MainCardTop = () => {

    return (
        <div className='card-top'>
            <div className='landing-left top-left'>
                <h1 className="static-text">Nolan Ley Custodio</h1>
                <div className="email-text">
                    <h2 className="static-text">custodionolan</h2>
                    <h2 className="static-text">@gmail.com</h2>
                </div>
                <h2 className="static-text">Full Stack Developer</h2>
            </div>
            <div className="landing-left">
                <SingleResource link="https://github.com/NolanCustodio" name="Github" />
                <SingleResource link={resumePath} name="Resume" />
            </div>
        </div>
    )
}

export default MainCardTop;