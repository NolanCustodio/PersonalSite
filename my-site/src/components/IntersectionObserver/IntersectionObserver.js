import { useEffect, useRef, useState } from "react";

function IntersectionObserver(options = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() =>{
        observerRef.current = new IntersectionObserver(
            ([entry]) =>{
                setIsVisible(entry.isIntersecting);
            },
            options
        );

        return() =>{
            if (observerRef.current){
                observerRef.current.disconnect();
            }
        };
    }, [options]);

    return{
        isVisible,
        observerRef
    };
}

export default IntersectionObserver;