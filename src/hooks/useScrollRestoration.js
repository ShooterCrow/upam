import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// Module-level map persists scroll positions for the lifetime of the session
const scrollPositions = {};

const useScrollRestoration = () => {
    const location = useLocation();
    const navType = useNavigationType(); // 'POP' = browser back/forward, 'PUSH'/'REPLACE' = link click

    useEffect(() => {
        const path = location.pathname;

        if (navType === 'POP') {
            // Browser back/forward: restore the saved position for this route
            const savedY = scrollPositions[path];
            if (savedY !== undefined) {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        window.scrollTo({ top: savedY, behavior: 'instant' });
                    });
                });
            } else {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        } else {
            // Nav-link click (PUSH/REPLACE): always start at the top
            window.scrollTo({ top: 0, behavior: 'instant' });
        }

        // Track scroll position while on this route
        const handleScroll = () => {
            scrollPositions[path] = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Capture final position when leaving this route
            scrollPositions[path] = window.scrollY;
        };
    }, [location.pathname, navType]);
};

export default useScrollRestoration;
