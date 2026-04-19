import React, { useState } from "react";
import { useGetMyPaymentsQuery } from "../admin/membershipPayment/paymentsApiSlice";
import { Wallet, Calendar, DollarSign, Loader2 } from "lucide-react";
import LoadingState from "../../../component/ui/LoadingState";
import ErrorState from "../../../component/ui/ErrorState";
import Pagination from "../../../component/ui/Pagination";

const MyTransactions = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data: response, isLoading, isFetching, isError, error, refetch } = useGetMyPaymentsQuery({
    page,
    limit,
  });

  const transactions = response?.data || [];
  const totalPages = response?.totalPages || 1;
  const totalPayments = response?.totalPayments || 0;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
      case "succeeded":
        return "bg-green-50 text-green-600 border-green-100";
      case "pending":
        return "bg-amber-50 text-amber-600 border-amber-100";
      case "failed":
        return "bg-red-50 text-red-600 border-red-100";
      default:
        return "bg-slate-50 text-slate-600 border-slate-100";
    }
  };

  if (isLoading && !transactions.length) {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <LoadingState message="Fetching your transactions..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <ErrorState
          message={error?.data?.message || "Could not load your transactions"}
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
                <Wallet size={20} />
            </div>
            <h2 className="text-lg font-bold text-slate-800">My Transactions ({totalPayments})</h2>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-100 overflow-hidden relative min-h-[400px]">
        {/* Inline Loading Overlay */}
        {isFetching && transactions.length > 0 && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/40 backdrop-blur-[1px] transition-all">
            <Loader2 className="animate-spin text-blue-600" size={32} />
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Amount</th>
                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Purpose</th>
                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Plan</th>
                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Status</th>
                <th className="px-6 py-5 text-sm font-semibold text-slate-500 tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 whitespace-nowrap relative">
              {transactions.map((tx) => (
                <tr key={tx._id} className="group hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1.5 font-bold text-slate-700">
                        <span className="text-xs text-slate-400 font-medium">{tx.currency}</span>
                        {Number(tx.amount).toLocaleString()}
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span className="text-sm text-slate-600 font-medium">{tx.purpose}</span>
                  </td>

                  <td className="px-6 py-5">
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{tx.paymentPlan || "N/A"}</span>
                  </td>

                  <td className="px-6 py-5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider ${getStatusStyles(tx.status)}`}>
                      {tx.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-500 font-medium">
                    {formatDate(tx.createdAt)}
                  </td>
                </tr>
              ))}
              {transactions.length === 0 && !isFetching && (
                <tr>
                  <td colSpan="5" className="px-6 py-20 text-center text-slate-400 font-medium">
                    You haven't made any transactions yet.
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

export default MyTransactions;
