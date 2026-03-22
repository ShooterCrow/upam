import { ChevronLeft, ChevronRight } from "lucide-react";

const TransactionCard = () => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        
        {/* Table Scroll */}
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full border border-gray-200">
            
            {/* Table Head */}
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 text-xs md:text-sm font-semibold">
                  Date
                </th>
                <th className="px-4 py-2 text-xs md:text-sm font-semibold">
                  Amount
                </th>
                <th className="px-4 py-2 text-xs md:text-sm font-semibold">
                  Purpose
                </th>
                <th className="px-4 py-2 text-xs md:text-sm font-semibold">
                  Status
                </th>
                <th className="px-4 py-2 text-xs md:text-sm font-semibold">
                  Transaction ID
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <tr
                  key={i}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 text-xs md:text-sm whitespace-nowrap">
                    Aug 25, 2025
                  </td>

                  <td className="px-4 py-3 text-xs md:text-sm font-medium">
                    $56
                  </td>

                  <td className="px-4 py-3 text-xs md:text-sm">
                    Membership Fee
                  </td>

                  <td className="px-4 py-3 text-xs md:text-sm">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      Succeeded
                    </span>
                  </td>

                  <td className="px-4 py-3 text-xs md:text-sm text-gray-500 whitespace-nowrap">
                    pi..1264hds
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* ✅ Bottom Pagination — Matches Screenshot */}
        <div className="flex items-center justify-between px-4 py-3 border-t bg-gray-50">
          
          {/* Showing Text */}
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium">1</span>
            <span className="mx-1">-</span>
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">57</span>
          </p>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            
            {/* Previous */}
            <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition">
              <ChevronLeft size={16} />
              Previous
            </button>

            {/* Next */}
            <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition">
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