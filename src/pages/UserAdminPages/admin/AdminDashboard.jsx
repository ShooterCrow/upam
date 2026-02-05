import React from 'react';
import { DashboardStats } from '../../../component/dashboard/DashboardStats';
import DashboardCalendar from '../../../component/dashboard/DashboardCalendar';
import { ArrowRight, Plus, MapPin } from 'lucide-react';
import useAuth from '../../../hooks/useAuth';

const AdminDashboard = () => {
    const { user } = useAuth();

    const verifiedMembers = [
        { name: "Joseph Darwin", email: "Joseph@gmail.com", country: "Malawi", id: "20-1175" },
        { name: "Joseph Darwin", email: "Joseph@gmail.com", country: "Malawi", id: "20-1175" },
        { name: "Joseph Darwin", email: "Joseph@gmail.com", country: "Malawi", id: "20-1175" },
    ];

    const countries = [
        { name: 'Kenya', top: '20%', left: '60%' },
        { name: 'Namibia', top: '40%', left: '55%' },
        { name: 'Cameroon', top: '35%', left: '80%' },
        { name: 'Tanzania', top: '55%', left: '70%' },
        { name: 'Nigeria', top: '65%', left: '62%' },
        { name: 'Malawi', top: '85%', left: '82%' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header section */}
            <div className="flex justify-between items-end">
                <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Dashboard</h1>
            </div>

            {/* Stats Cards */}
            <DashboardStats />

            <div className="grid grid-cols-1 gap-8">
                {/* Left side: Banner and Announcement */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Welcome Banner */}
                    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-8 lg:p-12 min-h-[300px] flex flex-col justify-center border border-blue-100/50 dark:border-slate-700">
                        <div className="relative z-10 space-y-4 max-w-md">
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white leading-tight">
                                Welcome {user?.firstName} {user?.lastName}
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg">
                                Here's the Summary of your Activity History for the Week Here
                            </p>
                            <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all mt-4 group">
                                View Activities Here
                                <ArrowRight size={20} />
                            </button>
                        </div>

                        {/* Map Decoration */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                            <img
                                src="/world_map.png"
                                alt="World Map"
                                className="w-full h-full object-contain object-right"
                            />
                            {/* Country Markers */}
                            {countries.map((c) => (
                                <div
                                    key={c.name}
                                    className="absolute flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-white/50 dark:border-slate-700 animate-pulse"
                                    style={{ top: c.top, left: c.left }}
                                >
                                    <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-100">
                                        <img src={`https://flagcdn.com/w40/${c.name.toLowerCase() === 'nigeria' ? 'ng' : c.name.toLowerCase() === 'kenya' ? 'ke' : c.name.toLowerCase() === 'namibia' ? 'na' : c.name.toLowerCase() === 'cameroon' ? 'cm' : c.name.toLowerCase() === 'tanzania' ? 'tz' : 'mw'}.png`} alt={c.name} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-700 dark:text-slate-200">{c.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className='space-y-8'>
                            {/* Create Announcement */}
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-50 dark:border-slate-800 flex justify-between">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Create Announcement</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Create wide site announcement to everyone</p>
                                </div>
                                <button className="flex items-center gap-2 text-blue-500 font-bold hover:gap-3 transition-all mt-6 text-sm">
                                    Make payment
                                    <ArrowRight size={16} />
                                </button>
                            </div>

                            {/* Recently verified members */}
                            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-gray-50 dark:border-slate-800 p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Recently verified members</h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-slate-50 dark:border-slate-800">
                                                <th className="pb-4 text-sm font-semibold text-slate-500">Name</th>
                                                <th className="pb-4 text-sm font-semibold text-slate-500">Email</th>
                                                <th className="pb-4 text-sm font-semibold text-slate-500">Country</th>
                                                <th className="pb-4 text-sm font-semibold text-slate-500">ID.NO</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                            {verifiedMembers.map((member, idx) => (
                                                <tr key={idx} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                                                    <td className="py-4 text-sm font-medium text-slate-700 dark:text-slate-200">{member.name}</td>
                                                    <td className="py-4 text-sm text-slate-500 dark:text-slate-400">{member.email}</td>
                                                    <td className="py-4 text-sm text-slate-500 dark:text-slate-400">{member.country}</td>
                                                    <td className="py-4 text-sm font-bold text-slate-800 dark:text-slate-200">{member.id}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        {/* Right side: Calendar */}
                        <div className="lg:col-span-1 h-full">
                            <DashboardCalendar />
                        </div>

                    </div>


                </div>

                {/* Right side: Calendar */}
                {/* <div className="lg:col-span-1 h-full">
                    <DashboardCalendar />
                </div> */}
            </div>
        </div>
    );
};

export default AdminDashboard;