import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

const AdminBottomBar = () => {
    const location = useLocation();
    const [showMore, setShowMore] = useState(false);


    const mainLinks = ADMIN_LINKS.slice(0, 3);
    const moreLinks = ADMIN_LINKS.slice(3).concat([
        { name: 'Account', path: '/admin/my-profile', icon: User },
        { name: 'Log out', path: '/logout', icon: LogOut, isDanger: true },
    ]);

    return (
        <>
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
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setShowMore(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${link.isDanger
                                    ? 'text-red-600 hover:bg-red-50'
                                    : 'text-slate-600 hover:bg-slate-50'
                                    }`}
                            >
                                <Icon size={18} />
                                {link.name}
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
                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setShowMore(false)}
                            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${isActive
                                ? 'text-red-600'
                                : 'text-slate-400'
                                }`}
                        >
                            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                            <span className="text-[10px] font-medium">{link.name}</span>
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
                    <MoreHorizontal size={20} strokeWidth={2} />
                    <span className="text-[10px] font-medium">More</span>
                </button>
            </div>
        </>
    );
};

export default AdminBottomBar;
