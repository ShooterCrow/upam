import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Settings,
    FileText,
    BarChart,
    Shield,
    Bell,
    LogOut,
    User,
    CheckCircle,
    CreditCard,
    AlertCircle,
    Headphones,
    Copy,
    Check
} from 'lucide-react';
import { ADMIN_LINKS, ADMIN_BOTTOM_LINKS } from '../../../constants/navigation';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCompleteness } from '../../../pages/authenticationPages/authSlice';
import useAuth from '../../../hooks/useAuth';
import { useLogoutMutation } from '../../../pages/authenticationPages/authApiSlice';
import LoadingState from '../../ui/LoadingState';

const AdminSidebar = () => {
    const { user } = useAuth()
    const completeness = useSelector(selectCompleteness);
    const location = useLocation();
    const navigate = useNavigate();
    const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();
    const [copied, setCopied] = React.useState(false);

    const isComplete = completeness?.isAllComplete ?? true;
    const allowedPaths = [
        '/admin/my-profile',
        '/admin/member-verification',
        '/admin/emergency-contact',
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
            navigator.clipboard.writeText(user.importedMember_id || user.memberId);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    // Admin specific links
    const links = ADMIN_LINKS;
    const bottomLinks = ADMIN_BOTTOM_LINKS;

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
                    <Link to="/" className="flex items-center gap-2">
                        {/* Placeholder Logo */}
                        <img src="/logoupam.png" alt="Logo" />
                    </Link>
                </div>

                {/* Admin ID Section */}
                <div className="px-6 mb-2">
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-red-600 transition-colors group"
                        title="Copy ID"
                    >
                        <span className="group-hover:border-red-100">
                            Id: {user?.importedMember_id}
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
                        const isActive = location.pathname === link.path || (link.path !== '/admin' && location.pathname.startsWith(link.path));
                        const Icon = link.icon;
                        const isRestricted = !isComplete && !allowedPaths.includes(link.path);

                        return (
                            <Link
                                key={link.path}
                                to={isRestricted ? "#" : link.path}
                                onClick={(e) => isRestricted && e.preventDefault()}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                    ? 'bg-red-600 text-white shadow-sm'
                                    : isRestricted
                                        ? 'text-gray-300 cursor-not-allowed'
                                        : 'text-gray-900 hover:bg-slate-50 hover:text-red-500'
                                    }`}
                            >
                                <Icon size={18} />
                                <span className="flex-1">
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
                </nav>

                {/* Bottom Navigation (Profile/Logout) */}
                <div className="p-4 border-t border-gray-50 space-y-1">
                    {bottomLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = location.pathname === link.path || (link.path !== '/admin' && location.pathname.startsWith(link.path));
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
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors  ${isActive
                                    ? 'bg-red-600 text-white shadow-sm'
                                    : isRestricted
                                        ? 'text-gray-300 cursor-not-allowed'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-red-500'
                                    }`}
                            >
                                <Icon size={18} />
                                <span className="flex-1">
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

export default AdminSidebar;
