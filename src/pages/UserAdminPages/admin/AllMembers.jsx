import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useGetUsersQuery, useUpdateUserMutation } from '../../platform/usersApiSlice';
import {
    MoreVertical, SlidersHorizontal, Search, ShieldCheck, User as UserIcon, Loader2,
    ArrowUpAZ, ArrowDownAZ, ArrowUpDown, ArrowUp01, ArrowDown01,
    ArrowUpNarrowWide, ArrowDownNarrowWide
} from 'lucide-react';
import LoadingState from '../../../component/ui/LoadingState';
import ErrorState from '../../../component/ui/ErrorState';
import Pagination from '../../../component/ui/Pagination';
import { fireSortToast } from '../../../component/common/ToastNotification';

// Sort state cycles: null → 'asc' → 'desc' → 'reset' → null
const ROLE_ORDER = { admin: 0, manager: 1, representative: 2, user: 3 };

const SORT_CYCLE = [null, 'asc', 'desc', 'reset'];

const nextSortState = (current) => {
    const idx = SORT_CYCLE.indexOf(current);
    return SORT_CYCLE[(idx + 1) % SORT_CYCLE.length];
};

const SortIcon = ({ col, sortConfig }) => {
    if (sortConfig.col !== col) return <ArrowUpDown size={13} className="text-slate-300 inline ml-1" />;
    if (sortConfig.dir === 'asc') {
        if (col === 'name' || col === 'email' || col === 'country') return <ArrowUpAZ size={13} className="text-blue-500 inline ml-1" />;
        if (col === 'role') return <ArrowUpNarrowWide size={13} className="text-blue-500 inline ml-1" />;
        return <ArrowUp01 size={13} className="text-blue-500 inline ml-1" />;
    }
    if (sortConfig.dir === 'desc') {
        if (col === 'name' || col === 'email' || col === 'country') return <ArrowDownAZ size={13} className="text-orange-500 inline ml-1" />;
        if (col === 'role') return <ArrowDownNarrowWide size={13} className="text-orange-500 inline ml-1" />;
        return <ArrowDown01 size={13} className="text-orange-500 inline ml-1" />;
    }
    return <ArrowUpDown size={13} className="text-slate-400 inline ml-1" />;
};

const AllMembers = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAdmin } = useAuth();
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [verifiedFilter, setVerifiedFilter] = useState('all');
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [updatingRoleId, setUpdatingRoleId] = useState(null);
    const [sortConfig, setSortConfig] = useState({ col: null, dir: null });

    const isChapterMembers = location.pathname.includes('/chapter-members');
    const pageTitle = isChapterMembers ? 'Chapter Members' : 'All Members';

    const [updateUser] = useUpdateUserMutation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
            setPage(1);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const { data: response, isLoading, isFetching, isError, error, refetch } = useGetUsersQuery({
        page,
        limit,
        search: debouncedSearch || undefined,
        verified: verifiedFilter === 'all' ? undefined : verifiedFilter,
    });

    const rawUsers = response?.data || [];
    const totalPages = response?.totalPages || 1;
    const numberOfUsers = response?.totalUsersInDB || 0;

    const users = useMemo(() => {
        if (!sortConfig.col || sortConfig.dir === 'reset') return rawUsers;
        const sorted = [...rawUsers].sort((a, b) => {
            let aVal, bVal;
            switch (sortConfig.col) {
                case 'name':
                    aVal = `${a.firstName} ${a.lastName}`.toLowerCase();
                    bVal = `${b.firstName} ${b.lastName}`.toLowerCase();
                    break;
                case 'email':
                    aVal = (a.email || '').toLowerCase();
                    bVal = (b.email || '').toLowerCase();
                    break;
                case 'country':
                    aVal = (a.country || '').toLowerCase();
                    bVal = (b.country || '').toLowerCase();
                    break;
                case 'role':
                    aVal = ROLE_ORDER[a.roles[0]] ?? 99;
                    bVal = ROLE_ORDER[b.roles[0]] ?? 99;
                    break;
                case 'status':
                    aVal = a.isVerifiedMember ? 0 : 1;
                    bVal = b.isVerifiedMember ? 0 : 1;
                    break;
                case 'emailVerified':
                    aVal = a.emailVerified ? 0 : 1;
                    bVal = b.emailVerified ? 0 : 1;
                    break;
                default:
                    return 0;
            }
            if (aVal < bVal) return sortConfig.dir === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortConfig.dir === 'asc' ? 1 : -1;
            return 0;
        });
        return sorted;
    }, [rawUsers, sortConfig]);

    const handleSort = (col, label) => {
        setSortConfig(prev => {
            const sameCol = prev.col === col;
            const curDir = sameCol ? prev.dir : null;
            const nextDir = nextSortState(curDir);

            if (nextDir === null || nextDir === 'reset') {
                fireSortToast(`${label} — Default order`, 'sort-reset');
                return { col: null, dir: null };
            }

            const isTextCol = ['name', 'email', 'country'].includes(col);
            const toastType = nextDir === 'asc'
                ? (isTextCol ? 'sort-asc' : 'sort-num-asc')
                : (isTextCol ? 'sort-desc' : 'sort-num-desc');

            const suffix = nextDir === 'asc'
                ? (isTextCol ? 'A → Z' : 'Priority ↑')
                : (isTextCol ? 'Z → A' : 'Priority ↓');

            fireSortToast(`${label} — ${suffix}`, toastType);
            return { col, dir: nextDir };
        });
    };

    const handleFilterChange = (status) => {
        setVerifiedFilter(status);
        setPage(1);
        setShowFilterMenu(false);
    };

    const handleRoleChange = async (member, newRole) => {
        if (!window.confirm(`Are you sure you want to change ${member.firstName}'s role to ${newRole}?`)) return;
        setUpdatingRoleId(member._id);
        try {
            await updateUser({ id: member._id, roles: [newRole.toLowerCase()] }).unwrap();
        } catch (err) {
            alert(err?.data?.message || 'Failed to update role. Please check the safety net.');
        } finally {
            setUpdatingRoleId(null);
        }
    };

    const thClass = (col) =>
        `px-6 py-5 text-sm font-semibold tracking-wider cursor-pointer select-none transition-colors whitespace-nowrap
        ${sortConfig.col === col ? 'text-slate-700' : 'text-slate-500 hover:text-slate-700'}`;

    if (isLoading && !rawUsers.length) {
        return (
            <div className="h-[70vh] flex items-center justify-center">
                <LoadingState message="Fetching members..." />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="h-[70vh] flex items-center justify-center">
                <ErrorState message={error?.data?.message || 'Could not load members'} onRetry={refetch} />
            </div>
        );
    }

    return (
        <div className="animate-in fade-in duration-500 pb-10">
            {/* Header */}
            <div className="bg-white px-6 py-3 border border-gray-100 flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-bold text-slate-800">{pageTitle}</h2>
                    <p className="text-xs text-slate-400">{numberOfUsers.toLocaleString()} total members</p>
                </div>
                <div className="flex items-center gap-3">
                    {/* Search */}
                    <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search members..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700"
                        />
                    </div>

                    {/* Filter */}
                    <div className="relative">
                        <button
                            onClick={() => setShowFilterMenu(!showFilterMenu)}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-50 transition-all shadow-sm"
                        >
                            <SlidersHorizontal size={18} />
                            <span className="hidden sm:inline">Filter</span>
                        </button>

                        {showFilterMenu && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 py-2 animate-in fade-in slide-in-from-top-2">
                                {['all', 'true', 'false'].map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => handleFilterChange(f)}
                                        className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors ${verifiedFilter === f ? 'font-bold text-blue-600' : 'text-slate-600'}`}
                                    >
                                        {f === 'all' ? 'All Members' : f === 'true' ? 'Verified Members' : 'Unverified Members'}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-100 overflow-hidden relative min-h-[400px]">
                {isFetching && rawUsers.length > 0 && (
                    <div className="absolute inset-0 bg-white/60 flex items-center justify-center z-10">
                        <Loader2 size={28} className="animate-spin text-blue-500" />
                    </div>
                )}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">S/N</th>
                                <th className={thClass('name')} onClick={() => handleSort('name', 'Name')}>
                                    Name <SortIcon col="name" sortConfig={sortConfig} />
                                </th>
                                <th className={thClass('email')} onClick={() => handleSort('email', 'Email')}>
                                    Email <SortIcon col="email" sortConfig={sortConfig} />
                                </th>
                                <th className={`${thClass('emailVerified')} text-center`} onClick={() => handleSort('emailVerified', 'Email Verified')}>
                                    Email Verified <SortIcon col="emailVerified" sortConfig={sortConfig} />
                                </th>
                                <th className={thClass('country')} onClick={() => handleSort('country', 'Country')}>
                                    Country <SortIcon col="country" sortConfig={sortConfig} />
                                </th>
                                <th className={thClass('role')} onClick={() => handleSort('role', 'Role')}>
                                    Role <SortIcon col="role" sortConfig={sortConfig} />
                                </th>
                                <th className={thClass('status')} onClick={() => handleSort('status', 'Status')}>
                                    Status <SortIcon col="status" sortConfig={sortConfig} />
                                </th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 whitespace-nowrap relative">
                            {users.map((member, idx) => (
                                <tr
                                    key={member._id}
                                    className={`group hover:bg-slate-50 transition-colors cursor-pointer ${isFetching ? 'opacity-40 pointer-events-none' : ''}`}
                                    onClick={() => {
                                        const basePath = isChapterMembers ? 'chapter-members' : 'all-members';
                                        navigate(`/dashboard/${basePath}/${member._id}`);
                                    }}
                                >
                                    <td className="px-6 py-5 text-sm text-slate-400">
                                        {String((page - 1) * limit + idx + 1).padStart(2, '0')}
                                    </td>
                                    <td className="px-6 py-5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                                        {member.firstName} {member.lastName}
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-500">{member.email}</td>
                                    <td className="px-6 py-5 text-sm text-center">
                                        {member.emailVerified ? (
                                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-md text-[10px] font-black uppercase tracking-wider border border-green-200">
                                                <ShieldCheck size={12} strokeWidth={3} /> Verified
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 text-red-600 rounded-md text-[10px] font-black uppercase tracking-wider border border-red-100">
                                                Pending
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-500">{member.country || '---'}</td>
                                    <td className="px-6 py-5 text-sm" onClick={(e) => e.stopPropagation()}>
                                        {isAdmin ? (
                                            <div className="relative group/role">
                                                <select
                                                    disabled={updatingRoleId === member._id}
                                                    value={member.roles[0]}
                                                    onChange={(e) => handleRoleChange(member, e.target.value)}
                                                    className={`pl-8 pr-4 py-1.5 rounded-lg text-xs font-bold border transition-all appearance-none cursor-pointer outline-none
                                                        ${member.roles.includes('admin')
                                                            ? 'bg-red-50 text-red-600 border-red-100 hover:bg-red-100'
                                                            : 'bg-slate-50 text-slate-600 border-slate-100 hover:bg-slate-100'
                                                        } ${updatingRoleId === member._id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                >
                                                    <option value="user">USER</option>
                                                    <option value="manager">MANAGER</option>
                                                    <option value="representative">REPRESENTATIVE</option>
                                                    <option value="admin">ADMIN</option>
                                                </select>
                                                <div className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    {updatingRoleId === member._id ? (
                                                        <Loader2 size={14} className="animate-spin text-slate-400" />
                                                    ) : member.roles.includes('admin') ? (
                                                        <ShieldCheck size={14} className="text-red-600" />
                                                    ) : (
                                                        <UserIcon size={14} className="text-slate-500" />
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold uppercase border ${member.roles.includes('admin')
                                                    ? 'bg-red-50 text-red-600 border-red-100'
                                                    : member.roles.includes('representative')
                                                        ? 'bg-indigo-50 text-indigo-600 border-indigo-100'
                                                        : member.roles.includes('manager')
                                                            ? 'bg-blue-50 text-blue-600 border-blue-100'
                                                            : 'bg-slate-50 text-slate-600 border-slate-100'
                                                }`}>
                                                {member.roles.includes('admin') ? (
                                                    <ShieldCheck size={14} className="text-red-600" />
                                                ) : (
                                                    <UserIcon size={14} className="text-slate-500" />
                                                )}
                                                {member.roles[0]}
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-5 text-sm">
                                        {member.isVerifiedMember ? (
                                            <span className="px-2.5 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold border border-green-100 uppercase">Verified</span>
                                        ) : (
                                            <span className="px-2.5 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-bold border border-amber-100 uppercase">Unverified</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-5 text-right" onClick={(e) => e.stopPropagation()}>
                                        <button className="text-slate-400 hover:text-slate-600 p-1">
                                            <MoreVertical size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {users.length === 0 && !isFetching && (
                                <tr>
                                    <td colSpan="8" className="px-6 py-20 text-center text-slate-400 font-medium">
                                        {searchTerm ? `No results found for "${searchTerm}"` : 'No members found'}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
            />
        </div>
    );
};

export default AllMembers;
