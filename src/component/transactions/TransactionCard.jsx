import React, { useEffect, useState } from "react";
import { Copy, Check, Search } from "lucide-react";
import Pagination from "../ui/Pagination";

const MyTransactions = () => {

  // 🔵 States
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const perPage = 10;

  const [totalTransactions, setTotalTransactions] = useState(0);

  // ✅ Track which ID was copied
  const [copiedId, setCopiedId] = useState(null);

  // 🔵 Fetch Transactions
  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [search, transactions]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);

      const response = await fetch("");

      if (!response.ok) throw new Error();

      const data = await response.json();

      setTransactions(data.transactions);
      setTotalTransactions(data.total);

    } catch (err) {
      const dummy = Array.from({ length: 42 }, (_, i) => ({
        _id: i + 1,
        amount: Math.floor(Math.random() * 50000) + 1000,
        currency: "USD",
        purpose: ["Subscription", "Transfer", "Shopping", "Withdrawal"][i % 4],
        status: ["succeeded", "pending", "failed"][i % 3],
        transactionId: `TXN-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
        createdAt: new Date(Date.now() - i * 86400000),
      }));

      setTransactions(dummy);
      setTotalTransactions(dummy.length);
    } finally {
      setLoading(false);
    }
  };

  // 🔵 Search
  const handleSearch = () => {
    const filtered = transactions.filter((tx) =>
      tx.purpose.toLowerCase().includes(search.toLowerCase()) ||
      tx.transactionId.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredTransactions(filtered);
    setTotalTransactions(filtered.length);
    setPage(1);
  };

  // 🔵 Pagination
  const totalPages = Math.ceil(totalTransactions / perPage);

  const paginatedTransactions = filteredTransactions.slice(
    (page - 1) * perPage,
    page * perPage
  );

  // 🔵 Helpers
  const formatCurrency = (amount, currency) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
    }).format(amount);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  // ✅ COPY LOGIC WITH ICON SWITCH
  const copyTransactionId = async (id) => {
    try {
      await navigator.clipboard.writeText(id);
      setCopiedId(id);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (err) {
      console.error("Copy failed");
    }
  };

  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
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

  return (
    <div className="p-3 md:p-6 space-y-4">

      {/* 🔥 Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col md:flex-row justify-between gap-4">

        <h2 className="text-lg font-bold text-slate-800">
          My Transactions
        </h2>

        {/* 🔍 Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

      </div>

      {/* 🔥 Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px]">

            <thead className="bg-slate-50 text-left">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold">Date</th>
                <th className="px-4 py-3 text-xs font-semibold">Amount</th>
                <th className="px-4 py-3 text-xs font-semibold">Purpose</th>
                <th className="px-4 py-3 text-xs font-semibold">Status</th>
                <th className="px-4 py-3 text-xs font-semibold">Transaction ID</th>
              </tr>
            </thead>

            <tbody>

              {loading && (
                <tr>
                  <td colSpan="5" className="text-center py-10 text-gray-500">
                    Loading transactions...
                  </td>
                </tr>
              )}

              {!loading &&
                paginatedTransactions.map((tx) => (
                  <tr
                    key={tx._id}
                    className="border-t hover:bg-slate-50 transition"
                  >
                    <td className="px-4 py-3 text-sm whitespace-nowrap">
                      {formatDate(tx.createdAt)}
                    </td>

                    <td className="px-4 py-3 text-sm font-medium whitespace-nowrap">
                      {formatCurrency(tx.amount, tx.currency)}
                    </td>

                    <td className="px-4 py-3 text-sm whitespace-nowrap">
                      {tx.purpose}
                    </td>

                    <td className="px-4 py-3 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusStyles(tx.status)}`}>
                        {tx.status}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-sm flex items-center gap-2 text-gray-600">
                      <span className="truncate max-w-[140px]">
                        {tx.transactionId}
                      </span>

                      <button
                        onClick={() => copyTransactionId(tx.transactionId)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        {copiedId === tx.transactionId ? (
                          <Check size={14} className="text-green-600" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>

                    </td>
                  </tr>
                ))}

            </tbody>

          </table>
        </div>

        {/* 🔵 Pagination */}
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />

      </div>

    </div>
  );
};

export default MyTransactions;