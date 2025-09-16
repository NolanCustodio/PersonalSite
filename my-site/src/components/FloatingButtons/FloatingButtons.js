import React from 'react';

import './floating-button.css'

import ResumePath from '../Resume/NolanLeyCustodioResume.pdf'

import {ReactComponent as Github} from '../../images/resources/Github.svg';
import {ReactComponent as Resume} from '../../images/resources/Resume.svg';


const resourceIcons = {
    Github: Github,
    Resume: Resume,
}

const SingleButton = (props) => {
    const Component = resourceIcons[props.name]

    return (
        <div className='single-button-container'>
            <a href={props.path} target="_blank" rel="noreferrer" className='resource-link'>
                <button className='single-button'>
                    <Component className='svg-icon'/>
                </button>
                <p className='resourse-name'>{props.name}</p>
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