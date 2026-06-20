import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../../pages/authenticationPages/authApiSlice';
import LoadingState from '../../ui/LoadingState';
import {
    LayoutDashboard,
    Users,
    Settings,
    MoreHorizontal,
    FileText,
    BarChart,
    Shield,
    Bell,
    LogOut,
    User,
    CheckCircle,
    CreditCard,
    AlertCircle,
    Headphones
} from 'lucide-react';
import { ADMIN_LINKS } from '../../../constants/navigation';

import { selectCompleteness } from '../../../pages/authenticationPages/authSlice';
import { useSelector } from 'react-redux';

const AdminBottomBar = () => {
    const completeness = useSelector(selectCompleteness);
    const location = useLocation();
    const navigate = useNavigate();
    const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();
    const [showMore, setShowMore] = useState(false);

    const handleLogout = async () => {
        try {
            await logout().unwrap();
            navigate('/login');
        } catch (err) {
            console.error('Failed to logout:', err);
        }
    };


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

    const mainLinks = ADMIN_LINKS.slice(0, 3);
    const moreLinks = ADMIN_LINKS.slice(3).concat([
        { name: 'Account', path: '/admin/my-profile', icon: User },
        { name: 'Log out', path: '/logout', icon: LogOut, isDanger: true },
    ]);

    return (
        <>
            {isLoggingOut && (
                <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[9999] flex items-center justify-center">
                    <LoadingState message="Logging out..." />
                </div>
            )}
            {/* More Menu Overlay */}
            {showMore && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setShowMore(false)}
                />
            )}

            <div className={`fixed bottom-16 right-4 left-4 mb-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 lg:hidden transform transition-all duration-300 origin-bottom-right ${showMore ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'}`}>
                <div className="p-2 grid grid-cols-2 gap-2 max-h-[60vh] overflow-y-auto">
                    {moreLinks.map((link) => {
                        const Icon = link.icon;
                        const isRestricted = !isComplete && !allowedPaths.includes(link.path);

                        return link.path === '/logout' ? (
                            <button
                                key={link.path}
                                onClick={handleLogout}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-red-600 hover:bg-red-50 w-full"
                            >
                                <Icon size={18} />
                                {link.name}
                            </button>
                        ) : (
                            <Link
                                key={link.path}
                                to={isRestricted ? "#" : link.path}
                                onClick={() => {
                                    if (!isRestricted) setShowMore(false);
                                }}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${link.isDanger
                                    ? 'text-red-600 hover:bg-red-50'
                                    : isRestricted
                                        ? 'text-gray-300 cursor-not-allowed'
                                        : 'text-gray-900 hover:bg-slate-50'
                                    }`}
                            >
                                <Icon size={18} />
                                <span className="flex-1">{link.name}</span>
                                {isRestricted && <Shield size={14} className="text-gray-300" />}
                                {link.path === requiredPath && (
                                    <span className="flex items-center px-1.5 py-0.5 rounded-full bg-red-100 text-red-600 text-[8px] font-black uppercase animate-pulse border border-red-200">
                                        Action
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 lg:hidden z-50 flex items-center justify-around px-2 pb-safe">
                {mainLinks.map((link) => {
                    const isActive = location.pathname === link.path || (link.path !== '/admin' && location.pathname.startsWith(link.path));
                    const Icon = link.icon;
                    const isRestricted = !isComplete && !allowedPaths.includes(link.path);

                    return (
                        <Link
                            key={link.path}
                            to={isRestricted ? "#" : link.path}
                            onClick={() => !isRestricted && setShowMore(false)}
                            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${isActive
                                ? 'text-red-600'
                                : isRestricted
                                    ? 'text-gray-200 cursor-not-allowed font-light'
                                    : 'text-slate-400 font-medium'
                                }`}
                        >
                            <div className="relative">
                                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                {link.path === requiredPath && (
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                                )}
                                {link.path === requiredPath && (
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                                )}
                            </div>
                            <span className="text-[10px] font-medium text-center">{link.name}</span>
                        </Link>
                    );
                })}

                {/* More Button */}
                <button
                    onClick={() => setShowMore(!showMore)}
                    className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${showMore
                        ? 'text-red-600'
                        : 'text-slate-400'
                        }`}
                >
                    <div className="relative">
                        <MoreHorizontal size={20} strokeWidth={2} />
                        {moreLinks.some(l => l.path === requiredPath) && (
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                        )}
                        {moreLinks.some(l => l.path === requiredPath) && (
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                        )}
                    </div>
                    <span className="text-[10px] font-medium">More</span>
                </button>
            </div>
        </>
    );
};

export default AdminBottomBar;
