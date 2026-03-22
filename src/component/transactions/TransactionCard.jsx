import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TransactionCard = () => {

  // 🔵 States
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const perPage = 10;

  // Mock total transactions
  const [totalTransactions] = useState(57);

  // 🔵 Fetch Data
  useEffect(() => {
    fetchTransactions();
  }, [page]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);

      // 🔵 Mock Data
      const mockData = Array.from(
        { length: totalTransactions },
        (_, i) => ({
          id: i + 1,
          date: "Aug 25, 2025",
          amount: Math.floor(Math.random() * 200),
          purpose: "Membership Fee",
          status:
            i % 3 === 0
              ? "Succeeded"
              : i % 3 === 1
              ? "Pending"
              : "Failed",
          transactionId: `pi..${1000 + i}hds`,
        })
      );

      // Pagination Logic
      const start = (page - 1) * perPage;
      const end = start + perPage;

      const paginatedData = mockData.slice(start, end);

      setTimeout(() => {
        setTransactions(paginatedData);
        setLoading(false);
      }, 500);

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // 🔵 Status Styles
  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "succeeded":
      case "successful":
        return "bg-green-100 text-green-700";

      case "pending":
        return "bg-orange-100 text-orange-700";

      case "failed":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // 🔵 Pagination Math
  const totalPages = Math.ceil(
    totalTransactions / perPage
  );

  const startItem =
    (page - 1) * perPage + 1;

  const endItem = Math.min(
    page * perPage,
    totalTransactions
  );

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="p-3 md:p-4">

      <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">

        {/* 🔵 Responsive Table Wrapper */}
        <div className="w-full overflow-x-auto">

          <table className="w-full min-w-[720px] border-collapse">

            {/* 🔵 Table Head */}
            <thead className="bg-gray-100 text-left">

              <tr>

                <th className="px-3 md:px-4 py-2 text-xs md:text-sm font-semibold whitespace-nowrap">
                  Date
                </th>

                <th className="px-3 md:px-4 py-2 text-xs md:text-sm font-semibold whitespace-nowrap">
                  Amount
                </th>

                <th className="px-3 md:px-4 py-2 text-xs md:text-sm font-semibold whitespace-nowrap">
                  Purpose
                </th>

                <th className="px-3 md:px-4 py-2 text-xs md:text-sm font-semibold whitespace-nowrap">
                  Status
                </th>

                <th className="px-3 md:px-4 py-2 text-xs md:text-sm font-semibold whitespace-nowrap">
                  Transaction ID
                </th>

              </tr>

            </thead>

            {/* 🔵 Table Body */}
            <tbody>

              {/* Loading */}
              {loading && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 text-sm"
                  >
                    Loading transactions...
                  </td>
                </tr>
              )}

              {/* Empty */}
              {!loading &&
                transactions.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-6 text-gray-500 text-sm"
                    >
                      No transactions found
                    </td>
                  </tr>
                )}

              {/* Rows */}
              {!loading &&
                transactions.map((tx) => (

                  <tr
                    key={tx.id}
                    className="border-t hover:bg-gray-50 transition"
                  >

                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm whitespace-nowrap">
                      {tx.date}
                    </td>

                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm font-medium whitespace-nowrap">
                      ${tx.amount}
                    </td>

                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm whitespace-nowrap">
                      {tx.purpose}
                    </td>

                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm whitespace-nowrap">

                      <span
                        className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-medium ${getStatusStyles(
                          tx.status
                        )}`}
                      >
                        {tx.status}
                      </span>

                    </td>

                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm text-gray-500 whitespace-nowrap">
                      {tx.transactionId}
                    </td>

                  </tr>

                ))}

            </tbody>

          </table>

        </div>

        {/* 🔵 Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t bg-gray-50">

          <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">

            Showing{" "}

            <span className="font-medium">
              {startItem}
            </span>

            -

            <span className="font-medium">
              {endItem}
            </span>{" "}

            of{" "}

            <span className="font-medium">
              {totalTransactions}
            </span>

          </p>

          <div className="flex items-center gap-2">

            {/* Previous */}
            <button
              onClick={handlePrevious}
              disabled={page === 1}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded-md transition
              ${
                page === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded-md transition
              ${
                page === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Next
              <ChevronRight size={16} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TransactionCard;