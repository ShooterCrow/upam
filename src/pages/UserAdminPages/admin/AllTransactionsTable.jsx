import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AllTransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    fetchTransactions();
  }, [page]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/transactions");
      const data = await response.json();

      const start = (page - 1) * perPage;
      const end = start + perPage;

      const paginatedData = data.slice(start, end);

      setTransactions(paginatedData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "succeeded":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-orange-100 text-orange-700";
      case "failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const totalTransactions = 100;
  const totalPages = Math.ceil(totalTransactions / perPage);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="p-3 md:p-4">
      <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 text-xs md:text-sm font-semibold">User</th>
                <th className="px-4 py-2 text-xs md:text-sm font-semibold">Amount</th>
                <th className="px-4 py-2 text-xs md:text-sm font-semibold">Purpose</th>
                <th className="px-4 py-2 text-xs md:text-sm font-semibold">Payment Plan</th>
                <th className="px-4 py-2 text-xs md:text-sm font-semibold">Status</th>
                <th className="px-4 py-2 text-xs md:text-sm font-semibold">Date</th>
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    Loading transactions...
                  </td>
                </tr>
              )}

              {!loading &&
                transactions.map((tx) => (
                  <tr key={tx._id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3 text-xs md:text-sm">
                      {tx.user?.email || "No Email"}
                    </td>

                    <td className="px-4 py-3 text-xs md:text-sm font-medium">
                      {tx.currency?.toUpperCase()} {Number(tx.amount).toFixed(2)}
                    </td>

                    <td className="px-4 py-3 text-xs md:text-sm">
                      {tx.purpose}
                    </td>

                    <td className="px-4 py-3 text-xs md:text-sm text-gray-600">
                      {tx.paymentPlan}
                    </td>

                    <td className="px-4 py-3 text-xs md:text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles(tx.status)}`}>
                        {tx.status}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-xs md:text-sm text-gray-600">
                      {formatDate(tx.createdAt)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-4 py-3 border-t bg-gray-50">
          <div className="flex gap-2">
            <button onClick={handlePrevious} disabled={page === 1}>
              <ChevronLeft size={16} /> Previous
            </button>

            <button onClick={handleNext} disabled={page === totalPages}>
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTransactionsTable;
