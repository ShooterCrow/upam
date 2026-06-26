import { useEffect, useRef } from 'react';

/**
 * AutoRecovery component implements an aggressive "Full Reload" strategy.
 * It ensures the application always starts with a fresh state by triggering
 * window.location.reload() under the following conditions:
 * 1. Tab has been inactive (hidden) for more than 1 minute.
 * 2. Internet connection is restored (online event).
 * 3. After every 6 API requests made (tracked in apiSlice.js).
 */
/**
 * AutoRecovery configuration flags.
 * Set to false to disable specific reload/refresh criteria.
 */
const ENABLE_IDLE_RELOAD = false; // Reload when tab is inactive for more than 1 minute
const ENABLE_ONLINE_RELOAD = true; // Reload when internet connection is restored

const EXCLUDED_ROUTES = ["/register", "/admin/settings"];


const AutoRecovery = () => {
    const lastHiddenTime = useRef(Date.now());

    const isExcluded = () => {
        return EXCLUDED_ROUTES.some(route => window.location.pathname.startsWith(route));
    };

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                lastHiddenTime.current = Date.now();
            } else if (document.visibilityState === 'visible') {
                const idleDuration = Date.now() - lastHiddenTime.current;
                console.log(`Tab became visible. Idle duration: ${Math.round(idleDuration / 1000)}s`);

                // If idle for more than 1 minute, reload.
                if (idleDuration > 1 * 60 * 1000) {
                    if (!ENABLE_IDLE_RELOAD) {
                        console.log('Idle duration exceeded 1 minute, but ENABLE_IDLE_RELOAD is false. Skipping.');
                        return;
                    }
                    if (isExcluded()) {
                        console.log('Idle duration exceeded 1 minute, but route is excluded. Skipping reload.');
                        return;
                    }
                    console.log('Idle duration exceeded 1 minute. Triggering full page reload.');
                    window.location.reload();
                }
            }
        };

        const handleOnline = () => {
            if (!ENABLE_ONLINE_RELOAD) {
                console.log('Internet connection restored, but ENABLE_ONLINE_RELOAD is false. Skipping.');
                return;
            }
            if (isExcluded()) {
                console.log('Internet connection restored, but route is excluded. Skipping reload.');
                return;
            }
            console.log('Internet connection restored. Triggering full page reload.');
            window.location.reload();
        };


        // Listen for visibility changes
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Listen for restored connectivity
        window.addEventListener('online', handleOnline);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('online', handleOnline);
        };
    }, []);

    return null;
};

export default AutoRecovery;
