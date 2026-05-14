import React, { useState } from "react";
import { useGetMyDuesQuery } from "../admin/duesApiSlice";
import { ClipboardList, Loader2 } from "lucide-react";
import LoadingState from "../../../component/ui/LoadingState";
import ErrorState from "../../../component/ui/ErrorState";
import Pagination from "../../../component/ui/Pagination";

const MyDues = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data: response, isLoading, isFetching, isError, error, refetch } = useGetMyDuesQuery({
    page,
    limit,
  });

  const dues = response?.data || [];
  const totalPages = response?.totalPages || 1;
  const totalDues = response?.count || 0;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (isLoading && !dues.length) {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <LoadingState message="Fetching your dues..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <ErrorState
          message={error?.data?.message || "Could not load your dues"}
          onRetry={refetch}
        />
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500 pb-10">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <ClipboardList size={20} />
            </div>
            <h2 className="text-lg font-bold text-slate-800">My Dues ({totalDues})</h2>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-100 overflow-hidden relative min-h-[400px]">
        {/* Inline Loading Overlay */}
        {isFetching && dues.length > 0 && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/40 backdrop-blur-[1px] transition-all">
            <Loader2 className="animate-spin text-blue-600" size={32} />
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Amount</th>
                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Year</th>
                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Date Added</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 whitespace-nowrap relative">
              {dues.map((due) => (
                <tr key={due._id} className="group hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1.5 font-bold text-slate-700">
                        {Number(due.due_amt).toLocaleString()}
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span className="text-sm text-slate-600 font-medium">{due.due_yr}</span>
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-500 font-medium">
                    {formatDate(due.createdAt)}
                  </td>
                </tr>
              ))}
              {dues.length === 0 && !isFetching && (
                <tr>
                  <td colSpan="3" className="px-6 py-20 text-center text-slate-400 font-medium">
                    You don't have any dues recorded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
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

export default MyDues;
