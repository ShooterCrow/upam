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
    LogOut
} from 'lucide-react';
import useAuth from '../../../hooks/useAuth';

const UserSidebar = () => {
    const { user } = useAuth()
    const location = useLocation();

    // Links matching the mockup
    const links = [
        { name: 'Dashboard', path: '/user', icon: LayoutDashboard },
        { name: 'Member Verification', path: '/user/verification', icon: CheckCircle },
        { name: 'Membership Payment', path: '/user/payment', icon: CreditCard },
        { name: 'Emergency Contact', path: '/user/emergency', icon: AlertCircle },
        { name: 'Notification', path: '/user/notifications', icon: Bell },
        { name: 'Support & Help', path: '/user/support', icon: Headphones },
        { name: 'All Members', path: '/user/members', icon: Users },
        { name: 'Members Application', path: '/user/applications', icon: FileText }, // Using FileText for application
    ];

    const bottomLinks = [
        { name: 'Account', path: '/user/account', icon: User },
        { name: 'Log out', path: '/logout', icon: LogOut },
    ];

    return (
        <aside className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-slate-900 border-r border-gray-100 dark:border-slate-800 z-40 hidden lg:flex flex-col font-sans">
            {/* Logo Section */}
            <div className="h-24 flex flex-col justify-center px-6 border-b border-gray-50 dark:border-slate-800">
                <Link to="/" className="flex items-center">
                    {/* Placeholder Logo */}
                    <img src="/logoupam.png" alt="Logo" />
                </Link>
            </div>

            {/* User ID Section */}
            <div className="px-6 py-4">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">ID: {user?.id}</p>
            </div>

            {/* Main Navigation */}
            <nav className="flex-1 overflow-y-auto py-2 px-4 space-y-1">
                {links.map((link) => {
                    const isActive = location.pathname === link.path || (link.path !== '/user' && location.pathname.startsWith(link.path));
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                ? 'bg-red-600 text-white shadow-sm'
                                : 'text-slate-500 hover:bg-slate-50 hover:text-red-500 dark:text-slate-400 dark:hover:bg-slate-800/50'
                                }`}
                        >
                            <Icon size={18} />
                            {link.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Navigation (Account/Logout) */}
            <div className="p-4 border-t border-gray-50 dark:border-slate-800 space-y-1">
                {bottomLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-red-500 dark:text-slate-400 dark:hover:bg-slate-800/50 transition-colors"
                        >
                            <Icon size={18} />
                            {link.name}
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
};

export default UserSidebar;
