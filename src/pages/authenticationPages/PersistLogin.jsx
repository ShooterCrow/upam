import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import usePersist from '../../hooks/usePersist';
import { useRefreshMutation } from './authApiSlice';
import useAuth from '../../hooks/useAuth';
import LoadingState from '../../component/ui/LoadingState';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [refresh] = useRefreshMutation();
    const { token } = useAuth();
    const [persist] = usePersist();
    const { pathname } = useLocation()

    // Public routes that don't require authentication
    const publicRoutes = [
        '/',
        '/login',
        '/register',
        '/about',
        '/gallery',
        '/get-involved',
        '/publications',
        '/membership-policy',
        '/membership-agreement',
        '/contact-us',
        '/partnership',
        '/volunteer',
        '/leadership',
        '/platforms',
        '/forgot-password'
    ];
    const isPublicRoute = publicRoutes.some(route => pathname === route || pathname.startsWith('/research/'));

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh().unwrap();
            } catch (err) {
                import.meta.env.VITE_ENV === "dev_env" && console.error('Token refresh failed:', err);
                // Optionally handle specific error cases here
                // For example, redirect to login on certain errors
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        // Only attempt to refresh if we don't have a token and persistence is enabled
        if (!token && persist) {
            verifyRefreshToken();
        } else {
            setIsLoading(false);
        }

        return () => {
            isMounted = false;
        };
    }, [token, persist, refresh]); // Added missing dependencies

    // If persistence is disabled, render content immediately
    if (!persist || isPublicRoute) {
        return <Outlet />;
    }

    // While refreshing, show loader
    if (isLoading && !token) {
        return <LoadingState />;
    }

    return <Outlet />;
};

export default PersistLogin;