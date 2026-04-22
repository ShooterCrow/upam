import React, { useState, useEffect } from 'react';
import { useGetUsersQuery, useUpdateUserMutation } from '../../platform/usersApiSlice';
import { MoreVertical, Filter, ChevronLeft, ChevronRight, SlidersHorizontal, Search, ShieldCheck, User as UserIcon, Loader2 } from 'lucide-react';
import LoadingState from '../../../component/ui/LoadingState';
import ErrorState from '../../../component/ui/ErrorState';
import MemberInfoModal from './modals/MemberInfoModal';
import Pagination from '../../../component/ui/Pagination';

const AllMembers = () => {
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [verifiedFilter, setVerifiedFilter] = useState('all'); // 'all', 'true', 'false'
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updatingRoleId, setUpdatingRoleId] = useState(null);

    // Mutations
    const [updateUser] = useUpdateUserMutation();

    // Debounce search term
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
            setPage(1); // Reset to first page on search
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    const { data: response, isLoading, isFetching, isError, error, refetch } = useGetUsersQuery({
        page,
        limit,
        search: debouncedSearch || undefined,
        verified: verifiedFilter === 'all' ? undefined : verifiedFilter
    });

    const users = response?.data || [];
    const totalPages = response?.totalPages || 1;
    const numberOfUsers = response?.totalUsersInDB || 0;

    const handleFilterChange = (status) => {
        setVerifiedFilter(status);
        setPage(1);
        setShowFilterMenu(false);
    };

    const handleRoleChange = async (member, newRole) => {
        if (!window.confirm(`Are you sure you want to change ${member.firstName}'s role to ${newRole}?`)) return;

        setUpdatingRoleId(member._id);
        try {
            await updateUser({
                id: member._id,
                roles: [newRole.toLowerCase()]
            }).unwrap();
            // Success! The table will auto-update because of tag invalidation
        } catch (err) {
            alert(err?.data?.message || "Failed to update role. Please check the safety net.");
        } finally {
            setUpdatingRoleId(null);
        }
    };

    if (isLoading && !users.length) {
        return (
            <div className="h-[70vh] flex items-center justify-center">
                <LoadingState message="Fetching members..." />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="h-[70vh] flex items-center justify-center">
                <ErrorState
                    message={error?.data?.message || "Could not load members"}
                    onRetry={refetch}
                />
            </div>
        );
    }

    return (
        <div className="animate-in fade-in duration-500 pb-10">
            {/* Header & Search/Filter */}
            <div className="bg-white px-6 py-4 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <h2 className="text-lg font-bold text-slate-800 w-full md:w-auto">All Members ({numberOfUsers})</h2>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    {/* Search Input */}
                    <div className="relative flex-1 md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search members..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700"
                        />
                    </div>

                    {/* Filter Menu */}
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
                                <button
                                    onClick={() => handleFilterChange('all')}
                                    className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors ${verifiedFilter === 'all' ? 'font-bold text-blue-600' : 'text-slate-600'}`}
                                >
                                    All Members
                                </button>
                                <div className="h-px bg-slate-50 mx-2"></div>
                                <button
                                    onClick={() => handleFilterChange('true')}
                                    className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors ${verifiedFilter === 'true' ? 'font-bold text-blue-600' : 'text-slate-600'}`}
                                >
                                    Verified Members
                                </button>
                                <div className="h-px bg-slate-50 mx-2"></div>
                                <button
                                    onClick={() => handleFilterChange('false')}
                                    className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors ${verifiedFilter === 'false' ? 'font-bold text-blue-600' : 'text-slate-600'}`}
                                >
                                    Unverified Members
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-100 overflow-hidden relative min-h-[400px]">
                {/* Inline Loading Overlay */}
                {isFetching && users.length > 0 && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/40 backdrop-blur-[1px] transition-all">
                        <LoadingState message="Wait a moment..." />
                    </div>
                )}

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">S/N</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Name</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Email</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Country</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Role</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Status</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 whitespace-nowrap relative">
                            {users.map((member, idx) => (
                                <tr
                                    key={member._id}
                                    className={`group hover:bg-slate-50 transition-colors cursor-pointer ${isFetching ? 'opacity-40 pointer-events-none' : ''}`}
                                    onClick={() => {
                                        setSelectedMember(member);
                                        setIsModalOpen(true);
                                    }}
                                >
                                    <td className="px-6 py-5 text-sm text-slate-400">
                                        {String((page - 1) * limit + idx + 1).padStart(2, '0')}
                                    </td>
                                    <td className="px-6 py-5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                                        {member.firstName} {member.lastName}
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-500">{member.email}</td>
                                    <td className="px-6 py-5 text-sm text-slate-500">{member.country || '---'}</td>
                                    <td className="px-6 py-5 text-sm" onClick={(e) => e.stopPropagation()}>
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
                                    <td colSpan="6" className="px-6 py-20 text-center text-slate-400 font-medium">
                                        {searchTerm ? `No results found for "${searchTerm}"` : 'No members found'}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <MemberInfoModal
                    isOpen={isModalOpen}
                    onClose={() => {
                        setIsModalOpen(false);
                        setSelectedMember(null);
                    }}
                    member={selectedMember}
                />
            </div>

            {/* Pagination */}
            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
            />
        </div>
    );
};

export default AllMembers;
