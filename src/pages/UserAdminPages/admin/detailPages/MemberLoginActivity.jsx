import React, { useMemo, useState } from 'react';
import { History, Loader2, ShieldCheck, ShieldX, Monitor } from 'lucide-react';
import { useGetUserLoginActivityQuery } from '../../../platform/usersApiSlice';
import ErrorState from '../../../../component/ui/ErrorState';
import Pagination from '../../../../component/ui/Pagination';

const LIMIT = 10;

// The API may expose the timestamp/status under a few different keys depending on
// whether the record comes from the embedded `lastLogins` array or a dedicated
// activity collection, so normalise before rendering.
const getTimestamp = (activity) =>
    activity?.loginDate || activity?.timestamp || activity?.createdAt || null;

const getStatus = (activity) => {
    const raw = activity?.status ?? activity?.success;
    if (raw === true) return 'Successful';
    if (raw === false) return 'Failed';
    if (!raw) return 'Successful';
    return String(raw);
};

const isSuccessful = (status) => status.toLowerCase().startsWith('success');

const MemberLoginActivity = ({ userId }) => {
    const [page, setPage] = useState(1);

    const {
        data: response,
        isLoading,
        isFetching,
        isError,
        error,
        refetch,
    } = useGetUserLoginActivityQuery({ id: userId, page, limit: LIMIT }, { skip: !userId });

    const rawActivities = useMemo(
        () => (Array.isArray(response?.data) ? response.data : []),
        [response]
    );

    // Newest first — the API is expected to sort, this guards the rendered page.
    const activities = useMemo(
        () =>
            [...rawActivities].sort(
                (a, b) => new Date(getTimestamp(b) || 0) - new Date(getTimestamp(a) || 0)
            ),
        [rawActivities]
    );

    const totalPages = response?.totalPages || 1;

    const formatDate = (value) => {
        if (!value) return '---';
        return new Date(value).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    const formatTime = (value) => {
        if (!value) return '---';
        return new Date(value).toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="bg-white border border-gray-100 p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
                <History className="text-purple-500" size={20} />
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Login Activity</h3>
            </div>

            {isError ? (
                <ErrorState
                    message={error?.data?.message || 'Could not load login activity'}
                    onRetry={refetch}
                />
            ) : (
                <>
                    <div className="overflow-x-auto relative min-h-[160px]">
                        {isFetching && activities.length > 0 && (
                            <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/40 backdrop-blur-[1px]">
                                <Loader2 className="animate-spin text-blue-600" size={28} />
                            </div>
                        )}

                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="px-4 py-4 text-xs font-semibold text-slate-500 tracking-wider">Date</th>
                                    <th className="px-4 py-4 text-xs font-semibold text-slate-500 tracking-wider">Time</th>
                                    <th className="px-4 py-4 text-xs font-semibold text-slate-500 tracking-wider">Status</th>
                                    <th className="px-4 py-4 text-xs font-semibold text-slate-500 tracking-wider">Device</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 whitespace-nowrap">
                                {isLoading ? (
                                    <tr>
                                        <td colSpan="4" className="px-4 py-16 text-center">
                                            <div className="flex flex-col items-center gap-2">
                                                <Loader2 size={24} className="animate-spin text-slate-400" />
                                                <p className="text-xs font-medium text-slate-400">Loading login activity...</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : activities.length > 0 ? (
                                    activities.map((activity, idx) => {
                                        const timestamp = getTimestamp(activity);
                                        const status = getStatus(activity);
                                        const success = isSuccessful(status);
                                        return (
                                            <tr
                                                key={activity._id || `${timestamp}-${idx}`}
                                                className="group hover:bg-slate-50 transition-colors"
                                            >
                                                <td className="px-4 py-4 text-sm font-semibold text-slate-700">
                                                    {formatDate(timestamp)}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-slate-500 font-medium">
                                                    {formatTime(timestamp)}
                                                </td>
                                                <td className="px-4 py-4 text-sm">
                                                    <span
                                                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider border ${success
                                                            ? 'bg-green-100 text-green-700 border-green-200'
                                                            : 'bg-red-50 text-red-600 border-red-100'
                                                            }`}
                                                    >
                                                        {success ? (
                                                            <ShieldCheck size={12} strokeWidth={3} />
                                                        ) : (
                                                            <ShieldX size={12} strokeWidth={3} />
                                                        )}
                                                        {status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4 text-sm text-slate-500 font-medium">
                                                    {activity.deviceType || activity.device || '---'}
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="px-4 py-16 text-center">
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                                                    <Monitor size={20} />
                                                </div>
                                                <p className="text-xs font-medium text-slate-400">
                                                    No login activity recorded yet.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
                </>
            )}
        </div>
    );
};

export default MemberLoginActivity;
