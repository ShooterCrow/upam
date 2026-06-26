import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RoleRedirectGuard = () => {
    const { roles, isLoggedIn } = useAuth();
    const location = useLocation();

    if (!isLoggedIn) return <Outlet />;

    const isAdmin = roles.includes('admin') || roles.includes('manager');
    const isUser = roles.includes('user');

    // If Admin is in /user space, bounce to /admin
    if (isAdmin && location.pathname.startsWith('/user')) {
        const targetPath = location.pathname.replace('/user', '/admin');
        return <Navigate to={targetPath} replace />;
    }

    // If User (only) is in /admin space, bounce to /user
    // Note: managers might have both, so we use strict user check
    if (isUser && !isAdmin && location.pathname.startsWith('/admin')) {
        const targetPath = location.pathname.replace('/admin', '/user');
        return <Navigate to={targetPath} replace />;
    }

    return <Outlet />;
};

export default RoleRedirectGuard;
