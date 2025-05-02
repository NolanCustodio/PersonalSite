import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../features/windowInfo";


export function scrollIntoView(id){
    // console.log(id);
    let element = document.getElementById(id);

    element.scrollIntoView({
        behavior:'smooth',
        block:'start'
    });
}

export function getWindowDimensions(){
    const { innerWidth: width, innerHeight: height } = window;
    return {width, height};
}

export function useWindowDimensions(){
    const dispatch = useDispatch();
    useEffect( () => {
        function handleResize() {
            dispatch(changeState(getWindowDimensions()));
        }
        window.addEventListener('resize', handleResize);
        return () => {window.removeEventListener('resize', handleResize)};
    });

}

export default { scrollIntoView, getWindowDimensions, useWindowDimensions};
