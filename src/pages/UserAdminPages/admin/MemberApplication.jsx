import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FileText,
    Clock,
    CheckCircle2,
    XCircle,
    ChevronRight,
    Search,
    Filter,
    Loader2,
    Calendar,
    User,
    SlidersHorizontal,
    MoreVertical
} from 'lucide-react';
import { useGetVerificationsQuery } from '../../platform/verificationApiSlice';
import LoadingState from '../../../component/ui/LoadingState';
import ErrorState from '../../../component/ui/ErrorState';

const MemberApplication = () => {
    const navigate = useNavigate();
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [statusFilter, setStatusFilter] = useState('all');

    const { data: response, isLoading, isError, error, refetch } = useGetVerificationsQuery();

    const applications = response?.data || [];

    const filteredApplications = statusFilter === 'all'
        ? applications
        : applications.filter(app => app.status === statusFilter);

    const StatusBadge = ({ status }) => {
        const configs = {
            Pending: { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50', label: 'Under Review' },
            Approved: { icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50', label: 'Verified' },
            Rejected: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50', label: 'Rejected' }
        };
        const config = configs[status] || configs.Pending;
        const Icon = config.icon;

        return (
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${config.bg} ${config.color} font-bold text-xs`}>
                <Icon size={14} />
                {config.label}
            </div>
        );
    };

    if (isLoading) {
        return (
            <div className="h-[70vh] flex items-center justify-center">
                <LoadingState message="Fetching applications..." />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="h-[70vh] flex items-center justify-center">
                <ErrorState
                    message={error?.data?.message || "Could not load applications"}
                    onRetry={refetch}
                />
            </div>
        );
    }

    return (
        <div className="animate-in fade-in duration-500 pb-10">
            {/* Header & Filter */}
            <div className="bg-white px-6 py-3 border border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-slate-800">Members Application</h2>

                <div className="relative">
                    <button
                        onClick={() => setShowFilterMenu(!showFilterMenu)}
                        className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors"
                    >
                        Filter
                        <SlidersHorizontal size={18} />
                    </button>

                    {showFilterMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl border border-gray-100 z-20 py-2 animate-in fade-in slide-in-from-top-2 shadow-xl shadow-slate-200/20">
                            <button
                                onClick={() => { setStatusFilter('all'); setShowFilterMenu(false); }}
                                className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors ${statusFilter === 'all' ? 'font-bold text-blue-600' : 'text-slate-600'}`}
                            >
                                All Applications
                            </button>
                            <div className="h-px bg-slate-50 mx-2"></div>
                            <button
                                onClick={() => { setStatusFilter('Pending'); setShowFilterMenu(false); }}
                                className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors ${statusFilter === 'Pending' ? 'font-bold text-blue-600' : 'text-slate-600'}`}
                            >
                                Pending
                            </button>
                            <div className="h-px bg-slate-50 mx-2"></div>
                            <button
                                onClick={() => { setStatusFilter('Approved'); setShowFilterMenu(false); }}
                                className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors ${statusFilter === 'Approved' ? 'font-bold text-blue-600' : 'text-slate-600'}`}
                            >
                                Approved
                            </button>
                            <div className="h-px bg-slate-50 mx-2"></div>
                            <button
                                onClick={() => { setStatusFilter('Rejected'); setShowFilterMenu(false); }}
                                className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors ${statusFilter === 'Rejected' ? 'font-bold text-blue-600' : 'text-slate-600'}`}
                            >
                                Rejected
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Table Area */}
            <div className="bg-white border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-6 py-5 text-xs font-semibold text-slate-500 tracking-wider">S/N</th>
                                <th className="px-6 py-5 text-xs font-semibold text-slate-500 tracking-wider">APPLICANT</th>
                                <th className="px-6 py-5 text-xs font-semibold text-slate-500 tracking-wider">TYPE</th>
                                <th className="px-6 py-5 text-xs font-semibold text-slate-500 tracking-wider">STATUS</th>
                                <th className="px-6 py-5 text-xs font-semibold text-slate-500 tracking-wider">SUBMISSION DATE</th>
                                <th className="px-6 py-5 text-xs font-semibold text-slate-500 tracking-wider"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredApplications.map((app, idx) => (
                                <tr
                                    key={app._id}
                                    className="group hover:bg-slate-50 transition-colors cursor-pointer"
                                    onClick={() => navigate(`/admin/members-application/${app._id}`)}
                                >
                                    <td className="px-6 py-5 text-sm text-slate-400">
                                        {String(idx + 1).padStart(2, '0')}
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                                                <User size={16} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-800">{app.user?.firstName} {app.user?.lastName}</p>
                                                <p className="text-[11px] text-slate-500 font-medium">{app.user?.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <p className="text-sm font-semibold text-slate-600">{app.membershipType}</p>
                                    </td>
                                    <td className="px-6 py-5">
                                        <StatusBadge status={app.status} />
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-500 font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            {new Date(app.createdAt).toLocaleDateString()}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-right" onClick={(e) => e.stopPropagation()}>
                                        <button className="text-slate-400 hover:text-slate-600 p-1">
                                            <MoreVertical size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {filteredApplications.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="px-6 py-20 text-center text-slate-400 font-medium">
                                        No applications found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MemberApplication;