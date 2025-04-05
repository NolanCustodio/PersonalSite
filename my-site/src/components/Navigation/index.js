import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../features/windowInfo";

// import { useLocation } from "react-router-dom";

// export default function ScrollToTop(){
//     const { pathname } = useLocation();

//     useEffect(() => {
//         window.scrollTo(0,0);
//     }, [pathname]);

//     return null;
// }

export function ScrollTo(height){

    const calcHeight = 1.25 * height;

    // const anchor = document.querySelector('Synchat')

    // anchor.scrollIntoView({behavior: 'smooth', block: 'center'})
    // console.log('test');

    // console.log(height);

    window.scrollTo({
        top: calcHeight,
        behavior: 'smooth'
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

export default {ScrollTo, getWindowDimensions, useWindowDimensions};
