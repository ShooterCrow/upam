import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './Admin/AdminHeader';
import AdminSidebar from './Admin/AdminSidebar';
import AdminBottomBar from './Admin/AdminBottomBar';

const AdminLayoutContext = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
            {/* Sidebar - Desktop Only */}
            <AdminSidebar />

            {/* Header - Fixed & Responsive */}
            <AdminHeader />

            {/* Main Content Area */}
            <main className="lg:pl-64 pt-16 pb-20 lg:pb-8 min-h-screen transition-all duration-300">
                <div className="p-4 lg:p-8">
                    <Outlet />
                </div>
            </main>

            {/* Bottom Bar - Mobile Only */}
            <AdminBottomBar />
        </div>
    );
};

export default AdminLayoutContext;
