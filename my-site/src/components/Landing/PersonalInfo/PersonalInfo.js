import './PersonalInfo.css';

import { scrollIntoView, ScrollTo } from '../../Navigation';
import { useSelector } from 'react-redux';

const PersonalInfo = (props) => {
    const windowInfo = useSelector((state) => state.windowInfo.index);


    return(
        <div className='PersonalInfo'
            style={{height: props.windowHeight}}
        >
            <div className='personal-info-top-half'>
                <div className="logo">
                    N
                </div>
                <h1 >Nolan Ley Custodio</h1>
                <p>Small Description</p>
                <p>{`window size H:${windowInfo.height} W:${windowInfo.width}`}</p>

                <div className='project-list'>
                    <div>Project</div>
                    <div>Project</div>
                    <div>Project</div>
                </div>
            </div>

            <div className='personal-info-bottom-half'>
                <button className='to-project1 next-button'
                    onClick={() => {
                        // ScrollTo(windowInfo.height)}
                        // scrollIntoView('Portfolio');
                        // scrollIntoView('NewsBox');
                        scrollIntoView('Synchat');
                    }}
                >
                    V
                </button>
            </div>
        </div>
    )
}

export default PersonalInfo;