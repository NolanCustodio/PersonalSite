import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop(){
//     const { pathname } = useLocation();

//     useEffect(() => {
//         window.scrollTo(0,0);
//     }, [pathname]);

//     return null;
// }

export function ScrollTo(){
    // const anchor = document.querySelector('Synchat')
    // anchor.scrollIntoView({behavior: 'smooth', block: 'center'})

    // console.log('test');

    window.scrollTo({
        left: 1000,
        top: 1000,
        behavior: 'smooth'
    });
}

export function getWindowDimensions(){
    const { innerWidth: width, innerHeight: height } = window;
    return {width, height};
}

export function useWindowDimensions(){
    const [ windowDimentions, setWindowDimensions ] = useState(getWindowDimensions());

    useEffect( () => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimentions;
}

export default {ScrollTo, getWindowDimensions, useWindowDimensions};
