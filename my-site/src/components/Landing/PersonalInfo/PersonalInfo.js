import './PersonalInfo.css';

import ScrollTo from '../../Navigation/ScrollTo';

const PersonalInfo = () => {

    return(
        <div className='PersonalInfo'>
            <div className="logo">
                N
            </div>
            <h1 >Nolan Ley Custodio</h1>
            <p >Small Description</p>

            <div className='project-list'>
                <div>Project</div>
                <div>Project</div>
                <div>Project</div>
            </div>

            <button className='to-project1 next-button'
                onClick={ScrollTo}
            >
                V
            </button>

        </div>
    )
}

export default PersonalInfo;