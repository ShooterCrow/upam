import React, { useState } from 'react';
import { useGetUsersQuery } from '../../platform/usersApiSlice';
import { MoreVertical, Filter, ChevronLeft, ChevronRight, Smartphone, Laptop, SlidersHorizontal } from 'lucide-react';
import LoadingState from '../../../component/ui/LoadingState';
import ErrorState from '../../../component/ui/ErrorState';
import { Link } from 'react-router-dom';
import MemberInfoModal from './modals/MemberInfoModal';

const AllMembers = () => {
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [verifiedFilter, setVerifiedFilter] = useState('all'); // 'all', 'true', 'false'
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data: response, isLoading, isError, error, refetch } = useGetUsersQuery({
        page,
        limit,
        verified: verifiedFilter === 'all' ? undefined : verifiedFilter
    });

    const users = response?.data || [];
    const totalPages = response?.totalPages || 1;

    const handleFilterChange = (status) => {
        setVerifiedFilter(status);
        setPage(1);
        setShowFilterMenu(false);
    };

    if (isLoading) {
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
            {/* Header & Filter */}
            <div className="bg-white px-6 py-3 border border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-slate-800">All Members</h2>

                <div className="relative">
                    <button
                        onClick={() => setShowFilterMenu(!showFilterMenu)}
                        className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors"
                    >
                        Filter
                        <SlidersHorizontal size={18} />
                    </button>

                    {showFilterMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl border border-gray-100 z-20 py-2 animate-in fade-in slide-in-from-top-2">
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

            {/* Table */}
            <div className="bg-white border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">S/N</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Name</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Email</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Country</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">ID.NO</th>
                                <th className="px-6 py-5 text-sm font-semibold text-slate-500"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {users.map((member, idx) => (
                                <tr
                                    key={member._id}
                                    className="group hover:bg-slate-50 transition-colors cursor-pointer"
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
                                    <td className="px-6 py-5 text-sm text-slate-800">
                                        {member._id}
                                    </td>
                                    <td className="px-6 py-5 text-right" onClick={(e) => e.stopPropagation()}>
                                        <button className="text-slate-400 hover:text-slate-600 p-1">
                                            <MoreVertical size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {users.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="px-6 py-20 text-center text-slate-400 font-medium">
                                        No members found
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
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                    <button
                        onClick={() => setPage(prev => Math.max(1, prev - 1))}
                        disabled={page === 1}
                        className="p-2 rounded-lg border border-gray-100 bg-white text-slate-500 disabled:opacity-30 hover:bg-slate-50 transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="flex items-center gap-1">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setPage(i + 1)}
                                className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${page === i + 1
                                    ? 'bg-blue-600 text-white shadow-xs shadow-blue-100'
                                    : 'text-slate-500 hover:bg-slate-100'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={page === totalPages}
                        className="p-2 rounded-lg border border-gray-100 bg-white text-slate-500 disabled:opacity-30 hover:bg-slate-50 transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllMembers;