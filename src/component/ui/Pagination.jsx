import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center mt-8 px-6">
            <div className="flex items-center bg-white border border-gray-100 rounded-2xl p-1.5 shadow-sm max-w-full overflow-hidden">
                <button
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-xl text-slate-500 disabled:opacity-20 hover:bg-slate-50 transition-colors flex-shrink-0"
                >
                    <ChevronLeft size={22} />
                </button>

                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar px-2 max-w-[240px] sm:max-w-md">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => onPageChange(i + 1)}
                            className={`min-w-[40px] h-10 rounded-xl text-sm font-bold transition-all flex-shrink-0 ${currentPage === i + 1
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                : 'text-slate-500 hover:bg-slate-100'
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-xl text-slate-500 disabled:opacity-20 hover:bg-slate-50 transition-colors flex-shrink-0"
                >
                    <ChevronRight size={22} />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
