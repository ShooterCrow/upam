import React from 'react';
import { CreditCard, Wallet, Share2, Users } from 'lucide-react';

const StatCard = ({ title, value, subValue, type, trend, icon: Icon, iconBg, iconColor, onClickLink, linkText }) => {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-50 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                    <p className="text-sm font-medium text-slate-500">{title}</p>
                    <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
                    {subValue && <p className="text-xs font-medium text-slate-400 mt-1">{subValue}</p>}
                </div>
                <div className={`${iconBg} p-3 rounded-xl`}>
                    <Icon className={iconColor} size={24} />
                </div>
            </div>
            {linkText && (
                <button
                    onClick={onClickLink}
                    className="text-xs font-medium text-blue-500 hover:text-blue-600 flex items-center gap-1 transition-colors text-left"
                >
                    {linkText}
                    {trend === 'up' && <span className="text-green-500">→</span>}
                </button>
            )}
        </div>
    );
};

export const DashboardStats = ({ data, isLoading }) => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount || 0);
    };

    const formatNumber = (num) => {
        return new Intl.NumberFormat('en-US').format(num || 0);
    };

    const stats = [
        {
            title: "My Total Spent",
            value: isLoading ? "..." : formatCurrency(data?.myTotalHistorySpent || data?.totalSpent),
            subValue: data?.totalPlatformHistorySpent > 0 
                ? `Platform Total: ${formatCurrency(data.totalPlatformHistorySpent)}` 
                : null,
            icon: CreditCard,
            iconBg: "bg-amber-50",
            iconColor: "text-amber-500",
            linkText: "Transaction history"
        },
        {
            title: "Outstanding Balance",
            value: isLoading ? "..." : formatCurrency(data?.outstandingBalance),
            icon: Wallet,
            iconBg: "bg-green-50",
            iconColor: "text-green-500",
            linkText: "Make payment",
            trend: 'up'
        },
        {
            title: "Total Shares",
            value: isLoading ? "..." : formatCurrency(data?.totalShares),
            icon: Share2,
            iconBg: "bg-orange-50",
            iconColor: "text-orange-500",
            linkText: "Buy more shares",
            trend: 'up'
        },
        {
            title: "Total Members",
            value: isLoading ? "..." : formatNumber(data?.totalMembers),
            icon: Users,
            iconBg: "bg-indigo-50",
            iconColor: "text-indigo-500"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    );
};
