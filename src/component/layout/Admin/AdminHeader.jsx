import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import useAuth from '../../../hooks/useAuth';
import ProfileBox from '../../ui/ProfileBox';

const AdminHeader = () => {
    const { user } = useAuth()
    console.log(useAuth());
    return (
        <header className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 h-16 fixed top-0 right-0 left-0 lg:left-64 z-30 flex items-center justify-between px-6 transition-all duration-300 font-sans">
            {/* Search Bar */}
            <div className="hidden md:flex items-center w-96 relative">
                <Search className="absolute left-3 text-slate-400" size={18} />
                <input
                    type="text"
                    placeholder="search for users, logs..."
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-1 focus:ring-red-500 outline-none text-slate-600 dark:text-slate-200 placeholder:text-slate-400"
                />
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-6 ml-auto">
                {/* Notification */}
                <button className="relative p-1 text-slate-600 dark:text-slate-300 hover:text-red-600 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 text-[10px] font-bold text-white flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900">
                        8
                    </span>
                </button>

                {/* Profile */}
                <ProfileBox />
            </div>
        </header>
    );
};

export default AdminHeader;
