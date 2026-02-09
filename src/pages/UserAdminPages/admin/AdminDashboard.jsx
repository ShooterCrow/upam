import React from 'react';
import { DashboardStats } from '../../../component/dashboard/DashboardStats';
import DashboardCalendar from '../../../component/dashboard/DashboardCalendar';
import { ArrowRight, Plus, MapPin } from 'lucide-react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

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
        <div className="space-y-5 animate-in fade-in duration-500">
            {/* Header section */}
            <div className="flex justify-between items-end">
                <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
            </div>

            {/* Stats Cards */}
            <DashboardStats />

            <div className="grid grid-cols-1 gap-8">
                {/* Left side: Banner and Announcement */}
                <div className="lg:col-span-2 space-y-5">
                    {/* Welcome Banner */}
                    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 min-h-[300px] flex flex-col justify-center border border-blue-100/50">
                        {/* <div className='absolute w-[100px] h-[100px] bg-red-300 opacity-50 rounded-full'></div> */}
                        <div className="absolute left-40 w-[150px] h-[150px] rounded-full 
                        bg-gradient-to-r from-red-200 via-red-300 to-red-400
                        shadow-[0_0_60px_20px_rgba(200,0,0,0.3)]
                        animate-pulse blur-[20px]"></div>
                        <div className="absolute right-20 w-[100px] h-[100px] rounded-full 
                        bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400
                        shadow-[0_0_60px_20px_rgba(0,0,200,0.3)]
                        blur-[20px]"></div>

                        <div className="relative z-10 space-y-4 max-w-md">
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                                Welcome {user?.firstName} {user?.lastName}
                            </h2>
                            <p className="text-slate-500 text-lg">
                                Here's the Summary of your Activity History for the Week Here
                            </p>
                            <Link to='/admin/calendar' className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all mt-4 group">
                                View Activities Here
                                <ArrowRight size={20} />
                            </Link>
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
                                    className="absolute flex items-center gap-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md border border-white/50 animate-pulse"
                                    style={{ top: c.top, left: c.left }}
                                >
                                    <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-100">
                                        <img src={`https://flagcdn.com/w40/${c.name.toLowerCase() === 'nigeria' ? 'ng' : c.name.toLowerCase() === 'kenya' ? 'ke' : c.name.toLowerCase() === 'namibia' ? 'na' : c.name.toLowerCase() === 'cameroon' ? 'cm' : c.name.toLowerCase() === 'tanzania' ? 'tz' : 'mw'}.png`} alt={c.name} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-700">{c.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className='space-y-5'>
                            {/* Create Announcement */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-50 flex justify-between">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-800">Create Announcement</h3>
                                    <p className="text-sm text-slate-500">Create wide site announcement to everyone</p>
                                </div>
                                <button className="flex items-center gap-2 text-blue-500 font-bold hover:gap-3 transition-all mt-6 text-sm">
                                    Make payment
                                    <ArrowRight size={16} />
                                </button>
                            </div>

                            {/* Recently verified members */}
                            <div className="bg-white rounded-3xl border border-gray-50 p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold text-slate-800">Recently verified members</h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-slate-50">
                                                <th className="pb-4 text-sm font-semibold text-slate-500">Name</th>
                                                <th className="pb-4 text-sm font-semibold text-slate-500">Email</th>
                                                <th className="pb-4 text-sm font-semibold text-slate-500">Country</th>
                                                <th className="pb-4 text-sm font-semibold text-slate-500">ID.NO</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {verifiedMembers.map((member, idx) => (
                                                <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                                                    <td className="py-4 text-sm font-medium text-slate-700">{member.name}</td>
                                                    <td className="py-4 text-sm text-slate-500">{member.email}</td>
                                                    <td className="py-4 text-sm text-slate-500">{member.country}</td>
                                                    <td className="py-4 text-sm font-bold text-slate-800">{member.id}</td>
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