import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// export default function ScrollToTop(){
//     const { pathname } = useLocation();

//     useEffect(() => {
//         window.scrollTo(0,0);
//     }, [pathname]);

//     return null;
// }

export default function ScrollTo(){
    // const anchor = document.querySelector('Synchat')
    // anchor.scrollIntoView({behavior: 'smooth', block: 'center'})

    // console.log('test');

    window.scrollTo({
        left: 1000,
        top: 1000,
        behavior: 'smooth'
    });
}
