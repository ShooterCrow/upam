import { useState, useEffect } from 'react';

/**
 * useMediaQuery Hook
 * @param {string} query - the media query to match (e.g. '(min-width: 1024px)')
 * @returns {boolean} - true if the query matches
 */
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [matches, query]);

    return matches;
};

export default useMediaQuery;
