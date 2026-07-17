import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FileText, Clock, CheckCircle2, XCircle, Search, Filter,
    Loader2, Calendar, User, SlidersHorizontal, MoreVertical,
    ArrowUpAZ, ArrowDownAZ, ArrowUpDown, ArrowUp01, ArrowDown01,
    ArrowUpNarrowWide, ArrowDownNarrowWide
} from 'lucide-react';
import { useGetVerificationsQuery } from '../../platform/verificationApiSlice';
import LoadingState from '../../../component/ui/LoadingState';
import ErrorState from '../../../component/ui/ErrorState';
import { fireSortToast } from '../../../component/common/ToastNotification';

const SORT_CYCLE = [null, 'asc', 'desc', 'reset'];
const STATUS_ORDER = { Pending: 0, Approved: 1, Rejected: 2 };

const nextSortState = (current) => {
    const idx = SORT_CYCLE.indexOf(current);
    return SORT_CYCLE[(idx + 1) % SORT_CYCLE.length];
};

const SortIcon = ({ col, sortConfig }) => {
    if (sortConfig.col !== col) return <ArrowUpDown size={13} className="text-slate-300 inline ml-1" />;
    if (sortConfig.dir === 'asc') {
        if (col === 'applicant' || col === 'type') return <ArrowUpAZ size={13} className="text-blue-500 inline ml-1" />;
        if (col === 'status') return <ArrowUpNarrowWide size={13} className="text-blue-500 inline ml-1" />;
        return <ArrowUp01 size={13} className="text-blue-500 inline ml-1" />;
    }
    if (sortConfig.dir === 'desc') {
        if (col === 'applicant' || col === 'type') return <ArrowDownAZ size={13} className="text-orange-500 inline ml-1" />;
        if (col === 'status') return <ArrowDownNarrowWide size={13} className="text-orange-500 inline ml-1" />;
        return <ArrowDown01 size={13} className="text-orange-500 inline ml-1" />;
    }
    return <ArrowUpDown size={13} className="text-slate-400 inline ml-1" />;
};

const MemberApplication = () => {
    const navigate = useNavigate();
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [statusFilter, setStatusFilter] = useState('all');
    const [sortConfig, setSortConfig] = useState({ col: null, dir: null });

    const { data: response, isLoading, isError, error, refetch } = useGetVerificationsQuery();
    const applications = response?.data || [];

    const filteredApplications = useMemo(() => {
        let items = statusFilter === 'all'
            ? applications
            : applications.filter(app => app.status === statusFilter);

        if (!sortConfig.col || sortConfig.dir === 'reset') return items;

        return [...items].sort((a, b) => {
            let aVal, bVal;
            switch (sortConfig.col) {
                case 'applicant':
                    aVal = `${a.user?.firstName} ${a.user?.lastName}`.toLowerCase();
                    bVal = `${b.user?.firstName} ${b.user?.lastName}`.toLowerCase();
                    break;
                case 'type':
                    aVal = (a.membershipType || '').toLowerCase();
                    bVal = (b.membershipType || '').toLowerCase();
                    break;
                case 'status':
                    aVal = STATUS_ORDER[a.status] ?? 99;
                    bVal = STATUS_ORDER[b.status] ?? 99;
                    break;
                case 'date':
                    aVal = new Date(a.createdAt).getTime();
                    bVal = new Date(b.createdAt).getTime();
                    break;
                default:
                    return 0;
            }
            if (aVal < bVal) return sortConfig.dir === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortConfig.dir === 'asc' ? 1 : -1;
            return 0;
        });
    }, [applications, statusFilter, sortConfig]);

    const handleSort = (col, label) => {
        setSortConfig(prev => {
            const sameCol = prev.col === col;
            const curDir = sameCol ? prev.dir : null;
            const nextDir = nextSortState(curDir);

            if (nextDir === null || nextDir === 'reset') {
                fireSortToast(`${label} — Default order`, 'sort-reset');
                return { col: null, dir: null };
            }

            const isTextCol = ['applicant', 'type'].includes(col);
            const toastType = nextDir === 'asc'
                ? (isTextCol ? 'sort-asc' : 'sort-num-asc')
                : (isTextCol ? 'sort-desc' : 'sort-num-desc');

            const suffix = nextDir === 'asc'
                ? (isTextCol ? 'A → Z' : 'Earliest first')
                : (isTextCol ? 'Z → A' : 'Latest first');

            fireSortToast(`${label} — ${suffix}`, toastType);
            return { col, dir: nextDir };
        });
    };

    const thClass = (col) =>
        `px-6 py-5 text-xs font-semibold tracking-wider cursor-pointer select-none transition-colors whitespace-nowrap
        ${sortConfig.col === col ? 'text-slate-700' : 'text-slate-500 hover:text-slate-700'}`;

    const StatusBadge = ({ status }) => {
        const configs = {
            Pending: { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50', label: 'Under Review' },
            Approved: { icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50', label: 'Verified' },
            Rejected: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50', label: 'Rejected' },
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

    if (isLoading) return (
        <div className="h-[70vh] flex items-center justify-center">
            <LoadingState message="Fetching applications..." />
        </div>
    );

    if (isError) return (
        <div className="h-[70vh] flex items-center justify-center">
            <ErrorState message={error?.data?.message || 'Could not load applications'} onRetry={refetch} />
        </div>
    );

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
                            {['all', 'Pending', 'Approved', 'Rejected'].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => { setStatusFilter(f); setShowFilterMenu(false); }}
                                    className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors ${statusFilter === f ? 'font-bold text-blue-600' : 'text-slate-600'}`}
                                >
                                    {f === 'all' ? 'All Applications' : f}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-6 py-5 text-xs font-semibold text-slate-500 tracking-wider">S/N</th>
                                <th className={thClass('applicant')} onClick={() => handleSort('applicant', 'Applicant')}>
                                    APPLICANT <SortIcon col="applicant" sortConfig={sortConfig} />
                                </th>
                                <th className={thClass('type')} onClick={() => handleSort('type', 'Type')}>
                                    TYPE <SortIcon col="type" sortConfig={sortConfig} />
                                </th>
                                <th className={thClass('status')} onClick={() => handleSort('status', 'Status')}>
                                    STATUS <SortIcon col="status" sortConfig={sortConfig} />
                                </th>
                                <th className={thClass('date')} onClick={() => handleSort('date', 'Date')}>
                                    SUBMISSION DATE <SortIcon col="date" sortConfig={sortConfig} />
                                </th>
                                <th className="px-6 py-5 text-xs font-semibold text-slate-500 tracking-wider"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredApplications.map((app, idx) => (
                                <tr
                                    key={app._id}
                                    className="group hover:bg-slate-50 transition-colors cursor-pointer"
                                    onClick={() => navigate(`/dashboard/members-application/${app._id}`)}
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