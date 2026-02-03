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
    User
} from 'lucide-react';

const AdminSidebar = () => {
    const location = useLocation();

    // Admin specific links
    const links = [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Manage Users', path: '/admin/users', icon: Users },
        { name: 'Content', path: '/admin/content', icon: FileText },
        { name: 'Analytics', path: '/admin/analytics', icon: BarChart },
        { name: 'Security', path: '/admin/security', icon: Shield },
        { name: 'Notifications', path: '/admin/notifications', icon: Bell },
        { name: 'Settings', path: '/admin/settings', icon: Settings },
    ];

    const bottomLinks = [
        { name: 'My Profile', path: '/admin/profile', icon: User },
        { name: 'Log out', path: '/logout', icon: LogOut },
    ];

    return (
        <aside className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-slate-900 border-r border-gray-100 dark:border-slate-800 z-40 hidden lg:flex flex-col font-sans">
            {/* Logo Section */}
            <div className="h-24 flex flex-col justify-center px-6 border-b border-gray-50 dark:border-slate-800">
                <Link to="/" className="flex items-center gap-2">
                    {/* Placeholder Logo */}
                    <img src="/logoupam.png" alt="Logo" />
                </Link>
            </div>

            {/* Admin ID Section */}
            <div className="px-6 py-4">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Admin ID: AD-9901</p>
            </div>

            {/* Main Navigation */}
            <nav className="flex-1 overflow-y-auto py-2 px-4 space-y-1">
                {links.map((link) => {
                    const isActive = location.pathname === link.path || (link.path !== '/admin' && location.pathname.startsWith(link.path));
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

            {/* Bottom Navigation (Profile/Logout) */}
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

export default AdminSidebar;
