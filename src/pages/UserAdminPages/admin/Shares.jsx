import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useGetDashboardDataQuery } from '../../platform/dashboardApiSlice';
import { useGetUsersQuery } from '../../platform/usersApiSlice';
import { useGetMemberSharesQuery } from '../../platform/sharesApiSlice';
import LoadingState from '../../../component/ui/LoadingState';
import ErrorState from '../../../component/ui/ErrorState';
import Pagination from '../../../component/ui/Pagination';
import ShareManagementModal from './detailPages/ShareManagementModal';
import { DashboardStats } from '../../../component/dashboard/DashboardStats';

const Shares = () => {
  const { isAdmin, user } = useAuth();
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: dashboardResponse, isLoading: isDashboardLoading } = useGetDashboardDataQuery();
  const dashboardData = dashboardResponse?.data || {};
  const stats = dashboardData.stats || {};

  const { data: usersResponse, isLoading, isFetching, isError, error, refetch } = useGetUsersQuery({ page, limit, search: search || undefined });
  const users = usersResponse?.data || [];
  const totalPages = usersResponse?.totalPages || 1;

  // fetch selected member shares when modal opens
  const selectedId = selectedMember?._id;
  const { data: memberSharesResponse, isLoading: isLoadingMemberShares } = useGetMemberSharesQuery(selectedId, { skip: !selectedId });
  const currentShares = memberSharesResponse?.data?.totalShares ?? undefined;

  useEffect(() => {
    if (!isModalOpen) {
      setSelectedMember(null);
    }
  }, [isModalOpen]);

  if (!isAdmin) {
    return (
      <div className="animate-in fade-in duration-500 pb-10">
        <div className="bg-white px-6 py-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-slate-800">Shares</h2>
        </div>
        <div className="p-6">
          <ErrorState message="Unauthorized — admin access only" />
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500 pb-10">
      <div className="bg-white px-6 py-6 border-b border-gray-100 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-slate-800">Shares</h2>
        <p className="text-sm text-slate-500">Manage platform shares and member allocations.</p>
      </div>

      <div className="p-6 space-y-6">
        <DashboardStats data={stats} role={user?.roles?.[0]} isLoading={isDashboardLoading} />

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b border-slate-50">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Members & Allocations</h3>
              <p className="text-xs text-slate-400">View members and manage individual share allocations.</p>
            </div>
            <div className="w-80">
              <input
                type="text"
                placeholder="Search members..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none"
              />
            </div>
          </div>

          {isLoading && !users.length ? (
            <div className="p-12">
              <LoadingState message="Fetching members..." />
            </div>
          ) : isError ? (
            <div className="p-12">
              <ErrorState message={error?.data?.message || 'Could not load members'} onRetry={refetch} />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-6 py-5 text-sm font-semibold text-slate-500">S/N</th>
                    <th className="px-6 py-5 text-sm font-semibold text-slate-500">Name</th>
                    <th className="px-6 py-5 text-sm font-semibold text-slate-500">Email</th>
                    <th className="px-6 py-5 text-sm font-semibold text-slate-500">Shares</th>
                    <th className="px-6 py-5 text-sm font-semibold text-slate-500"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {users.map((member, idx) => (
                    <tr key={member._id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 text-sm text-slate-400">{String((page - 1) * limit + idx + 1).padStart(2, '0')}</td>
                      <td className="px-6 py-5 text-sm font-semibold text-blue-600">{member.firstName} {member.lastName}</td>
                      <td className="px-6 py-5 text-sm text-slate-500">{member.email}</td>
                      <td className="px-6 py-5 text-sm text-slate-700">{member.totalShares !== undefined ? Number(member.totalShares).toLocaleString() : '—'}</td>
                      <td className="px-6 py-5 text-sm text-right">
                        <button
                          onClick={() => { setSelectedMember(member); setIsModalOpen(true); }}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700"
                        >
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="p-6">
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
          </div>
        </div>
      </div>

      <ShareManagementModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        member={selectedMember}
        currentShares={currentShares}
      />
    </div>
  );
};

export default Shares;
