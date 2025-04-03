import './PersonalInfo.css';

const PersonalInfo = () => {

    
    return(
        <div className='PersonalInfo'>
            <div className='personal-info-top-half'>
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
            </div>

            <div className='personal-info-bottom-half'>
                <button className='to-project1 next-button'
                    // onClick={useScreenDimensions}
                    // onClick={ScrollTo}
                >
                    V
                </button>
            </div>
        </div>
    )
}

export default PersonalInfo;