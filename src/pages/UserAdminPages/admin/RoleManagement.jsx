import React from 'react';
import { Shield, Users, Calendar, CheckSquare, MessageSquare, Settings, CheckCircle2 } from 'lucide-react';

const permissions = [
    {
        feature: "Member & Application Management",
        description: "View, edit, and approve members",
        admin: true,
        manager: true, // applications only in backend but roughly true here
        representative: false
    },
    {
        feature: "Membership Payments & Plans",
        description: "Manage plans and view platform payments",
        admin: true,
        manager: true,
        representative: false
    },
    {
        feature: "Chapters Management",
        description: "Full control over chapters and representatives",
        admin: true,
        manager: true,
        representative: false
    },
    {
        feature: "Events Management",
        description: "Create, update, and track standard events",
        admin: true,
        manager: true,
        representative: true
    },
    {
        feature: "Announcements",
        description: "Create site-wide announcement events",
        admin: true,
        manager: true,
        representative: false
    },
    {
        feature: "Site Content Management",
        description: "Update blogs, offers, media, and homepage",
        admin: true,
        manager: true,
        representative: false
    },
    {
        feature: "Support & Inbox",
        description: "Read and reply to support/contact messages",
        admin: true,
        manager: true,
        representative: false
    },
    {
        feature: "Platform Settings",
        description: "Update core platform configurations",
        admin: true,
        manager: false,
        representative: false
    },
    {
        feature: "Create User Directly",
        description: "Manually register and provision users",
        admin: true,
        manager: false,
        representative: true
    }
];

const RoleManagement = () => {
    return (
        <div className="animate-in fade-in duration-500 pb-10">
            <div className="bg-white px-6 py-6 border-b border-gray-100 flex flex-col gap-2">
                <h2 className="text-xl font-bold text-slate-800">Role Management</h2>
                <p className="text-slate-500 text-sm">Review role access levels and permitted administration features.</p>
            </div>

            <div className="p-6">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50/50">
                                <tr>
                                    <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Feature</th>
                                    <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider text-center border-l border-slate-100 bg-red-50/30">Admin</th>
                                    <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider text-center border-l border-slate-100">Manager</th>
                                    <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider text-center border-l border-slate-100 bg-blue-50/30">Representative</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {permissions.map((perm, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-slate-700">{perm.feature}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">{perm.description}</p>
                                        </td>
                                        <td className="px-6 py-4 text-center border-l border-slate-100 bg-red-50/10">
                                            {perm.admin ? <CheckCircle2 className="mx-auto text-green-500" size={20} /> : <span className="text-slate-300 font-bold">-</span>}
                                        </td>
                                        <td className="px-6 py-4 text-center border-l border-slate-100">
                                            {perm.manager ? <CheckCircle2 className="mx-auto text-green-500" size={20} /> : <span className="text-slate-300 font-bold">-</span>}
                                        </td>
                                        <td className="px-6 py-4 text-center border-l border-slate-100 bg-blue-50/10">
                                            {perm.representative ? <CheckCircle2 className="mx-auto text-green-500" size={20} /> : <span className="text-slate-300 font-bold">-</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoleManagement;
