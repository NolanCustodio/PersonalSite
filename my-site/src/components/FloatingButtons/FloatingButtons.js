import './floating-button.css'

import ResumePath from '../Resume/NolanLeyCustodioResume.pdf'

const SingleButton = (props) => {

    return (
        <div className='single-button'>
            <a href={props.path} target="_blank" rel="noreferrer">
                <button>
                    {props.name}
                </button>
            </a>
        </div>
    )
}

const FloatingButtons = () => {

    return (
        <div className='floating-buttons'>
            <SingleButton path={ResumePath} name='Resume' />
            <SingleButton path='https://github.com/NolanCustodio' name='Github' />
        </div>
    )

}

export default FloatingButtons;