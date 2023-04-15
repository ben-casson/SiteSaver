import { useState, useEffect, useRef, MouseEventHandler } from 'react';

export default function useComponentVisible(
    initialIsVisible: boolean,
    toggleMenu: MouseEventHandler<HTMLButtonElement>
) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsComponentVisible(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [toggleMenu]);

    return { ref, isComponentVisible, setIsComponentVisible, toggleMenu };
}
