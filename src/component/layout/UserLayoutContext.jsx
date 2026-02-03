import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from './User/UserHeader';
import UserSidebar from './User/UserSidebar';
import UserBottomBar from './User/UserBottomBar';

const UserLayoutContext = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
            {/* Sidebar - Desktop Only */}
            <UserSidebar />

            {/* Header - Fixed & Responsive */}
            <UserHeader />

            {/* Main Content Area */}
            <main className="lg:pl-64 pt-16 pb-20 lg:pb-8 min-h-screen transition-all duration-300">
                <div className="p-4 lg:p-8">
                    <Outlet />
                </div>
            </main>

            {/* Bottom Bar - Mobile Only */}
            <UserBottomBar />
        </div>
    );
};

export default UserLayoutContext;
