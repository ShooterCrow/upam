import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RoleRedirectGuard = () => {
    const { roles, isLoggedIn } = useAuth();
    const location = useLocation();

    if (!isLoggedIn) return <Outlet />;

    const isPrivileged = roles.includes('admin') || roles.includes('manager') || roles.includes('representative');
    const isPureUser = roles.includes('user') && !isPrivileged;

    // If privileged user is in /user space, bounce to /dashboard
    if (isPrivileged && location.pathname.startsWith('/user')) {
        const targetPath = location.pathname.replace('/user', '/dashboard');
        return <Navigate to={targetPath} replace />;
    }

    // If pure user is in /dashboard space, bounce to /user
    if (isPureUser && location.pathname.startsWith('/dashboard')) {
        const targetPath = location.pathname.replace('/dashboard', '/user');
        return <Navigate to={targetPath} replace />;
    }

    return <Outlet />;
};

export default RoleRedirectGuard;
