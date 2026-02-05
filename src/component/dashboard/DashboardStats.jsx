import React from 'react';
import { CreditCard, Wallet, Share2, Users } from 'lucide-react';

const StatCard = ({ title, value, type, trend, icon: Icon, iconBg, iconColor, onClickLink, linkText }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                    <p className="text-sm font-medium text-slate-500">{title}</p>
                    <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
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

export const DashboardStats = () => {
    const stats = [
        {
            title: "Total Spent",
            value: "$68.00",
            icon: CreditCard,
            iconBg: "bg-amber-50",
            iconColor: "text-amber-500",
            linkText: "Transaction history"
        },
        {
            title: "Outstanding Balance",
            value: "$-32.00",
            icon: Wallet,
            iconBg: "bg-green-50",
            iconColor: "text-green-500",
            linkText: "Make payment",
            trend: 'up'
        },
        {
            title: "Total Shares",
            value: "$43.00",
            icon: Share2,
            iconBg: "bg-orange-50",
            iconColor: "text-orange-500",
            linkText: "Buy more shares",
            trend: 'up'
        },
        {
            title: "Total Members",
            value: "350,000",
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
