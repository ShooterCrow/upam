import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { roles, isLoggedIn } = useAuth();
    const location = useLocation();

    // If not logged in, redirect to login page
    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If logged in but doesn't have required role, redirect to home
    if (!roles.some(role => allowedRoles.includes(role))) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    // User is authenticated and authorized
    return <Outlet />;
};

export default RequireAuth;
