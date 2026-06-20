import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    CheckCircle,
    CreditCard,
    AlertCircle,
    Bell,
    Headphones,
    Users,
    FileText,
    User,
    LogOut,
    BarChart,
    Shield,
    Settings,
    Copy,
    Check
} from 'lucide-react';
import { USER_LINKS, USER_BOTTOM_LINKS } from '../../../constants/navigation';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCompleteness } from '../../../pages/authenticationPages/authSlice';
import useAuth from '../../../hooks/useAuth';
import { useLogoutMutation } from '../../../pages/authenticationPages/authApiSlice';
import LoadingState from '../../ui/LoadingState';

const UserSidebar = () => {
    const { user } = useAuth()
    console.log(user)
    const completeness = useSelector(selectCompleteness);
    const location = useLocation();
    const navigate = useNavigate();
    const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();
    const [copied, setCopied] = React.useState(false);

    const isComplete = completeness?.isAllComplete ?? true;
    const allowedPaths = [
        '/user/my-profile',
        '/user/member-verification',
        '/user/emergency-contact',
        '/logout'
    ];

    const requiredPath = completeness && !isComplete ? (
        !completeness.step1.complete ? completeness.step1.path :
            !completeness.step2.complete ? completeness.step2.path :
                completeness.step3.path
    ) : null;

    const handleLogout = async () => {
        try {
            await logout().unwrap();
            navigate('/login');
        } catch (err) {
            console.error('Failed to logout:', err);
        }
    };

    const handleCopy = () => {
        if (user?.importedMember_id) {
            navigator.clipboard.writeText(user.importedMember_id);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    // Links matching the mockup
    const links = USER_LINKS;
    const bottomLinks = USER_BOTTOM_LINKS;

    return (
        <>
            {isLoggingOut && (
                <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[9999] flex items-center justify-center">
                    <LoadingState message="Logging out..." />
                </div>
            )}
            <aside className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-100 z-40 hidden lg:flex flex-col font-sans">
                {/* Logo Section */}
                <div className="h-24 flex flex-col justify-center px-6 border-b border-gray-50">
                    <Link to="/" className="flex items-center">
                        {/* Placeholder Logo */}
                        <img src="/logoupam.png" alt="Logo" />
                    </Link>
                </div>

                {/* User ID Section */}
                <div className="px-6 mb-2">
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-red-600 transition-colors group"
                        title="Copy ID"
                    >
                        <span className="bg-slate-50 px-2 py-1 rounded border border-gray-100 group-hover:border-red-100">
                            ID: {user?.importedMember_id}
                        </span>
                        {copied ? (
                            <Check size={14} className="text-green-500" />
                        ) : (
                            <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                    </button>
                </div>

                {/* Main Navigation */}
                <nav className="flex-1 overflow-y-auto py-2 px-4 space-y-1">
                    {links.map((link) => {
                        const isActive = location.pathname === link.path || (link.path !== '/user' && location.pathname.startsWith(link.path));
                        const Icon = link.icon;
                        const isRestricted = !isComplete && !allowedPaths.includes(link.path);

                        return (
                            <Link
                                key={link.path}
                                to={isRestricted ? "#" : link.path}
                                onClick={(e) => isRestricted && e.preventDefault()}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium justify-between transition-colors ${isActive
                                    ? 'bg-red-600 text-white shadow-sm'
                                    : isRestricted
                                        ? 'text-gray-300 cursor-not-allowed'
                                        : 'text-gray-900 hover:bg-slate-50 hover:text-red-500'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon size={18} />
                                    <span className="flex items-center justify-between">
                                        {link.name}
                                        {link.path === requiredPath && (
                                            <span className={`ml-2 inline-flex items-center w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-red-600'} text-red-800 text-[8px] font-black uppercase tracking-widest animate-pulse border border-red-200`}>

                                            </span>
                                        )}
                                    </span>
                                </div>
                                {isRestricted && <Shield size={14} className="text-gray-300" />}
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom Navigation (Account/Logout) */}
                <div className="p-4 border-t border-gray-50 space-y-1">
                    {bottomLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = location.pathname === link.path || (link.path !== '/user' && location.pathname.startsWith(link.path));
                        const isRestricted = !isComplete && !allowedPaths.includes(link.path);

                        return link.path === '/logout' ? (
                            <button
                                key={link.path}
                                onClick={handleLogout}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-red-500 transition-colors w-full"
                            >
                                <Icon size={18} />
                                {link.name}
                            </button>
                        ) : (
                            <Link
                                key={link.path}
                                to={isRestricted ? "#" : link.path}
                                onClick={(e) => isRestricted && e.preventDefault()}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                    ? 'bg-red-600 text-white shadow-sm'
                                    : isRestricted
                                        ? 'text-gray-300 cursor-not-allowed'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-red-500'
                                    }`}
                            >
                                <Icon size={18} />
                                <span className="flex-1 flex justify-between items-center">
                                    {link.name}
                                    {link.path === requiredPath && (
                                        <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full bg-red-100 text-red-600 text-[8px] font-black uppercase tracking-widest animate-pulse border border-red-200">
                                            Action
                                        </span>
                                    )}
                                </span>
                                {isRestricted && <Shield size={14} className="text-gray-300" />}
                            </Link>
                        );
                    })}
                </div>
            </aside>
        </>
    );
};

export default UserSidebar;
