import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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
    // const anchor = document.querySelector('Synchat')
    // anchor.scrollIntoView({behavior: 'smooth', block: 'center'})

    // console.log('test');

    window.scrollTo({
        top: {height},
        behavior: 'smooth'
    });
}

export function getWindowDimensions(){
    const { innerWidth: width, innerHeight: height } = window;
    return {width, height};
}

export function useWindowDimensions(){
    const dispatch = useDispatch();
    const [ windowDimentions, setWindowDimensions ] = useState(getWindowDimensions());

    // dispatch(changeState(windowDimentions));

    useEffect( () => {
        function handleResize() {
            // setWindowDimensions(getWindowDimensions());
            dispatch(changeState(window));
        }

        window.addEventListener('resize', handleResize);
        return () => {window.removeEventListener('resize', handleResize)};
    }, []);


    return windowDimentions;
}

export default {ScrollTo, getWindowDimensions, useWindowDimensions};
