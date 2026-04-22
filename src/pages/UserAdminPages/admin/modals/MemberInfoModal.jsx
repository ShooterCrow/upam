import React from 'react';
import {
    X,
    User,
    Mail,
    Phone,
    Globe,
    MapPin,
    Calendar,
    Heart,
    Users,
    IdCard,
    Shield,
    Loader2,
    AlertCircle,
    TrendingUp,
    CreditCard
} from 'lucide-react';
import { useGetUserFullProfileQuery } from '../../../platform/usersApiSlice';

const MemberInfoModal = ({ isOpen, onClose, member }) => {
    // Only call the query if the modal is open and we have a member ID
    const { data: response, isLoading, isError, error } = useGetUserFullProfileQuery(member?._id, {
        skip: !isOpen || !member?._id,
    });

    if (!isOpen || !member) return null;

    const fullMember = response?.data?.user || member;
    const contactInfo = response?.data?.contactInfo || {};
    const stats = response?.data?.stats || {};

    return (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-4xl rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300 relative">

                {/* Header */}
                <div className="sticky top-0 bg-white/80 backdrop-blur-md px-8 py-6 border-b border-gray-100 flex items-center justify-between z-30">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm">
                            <User size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 leading-none mb-1.5">Member Information</h2>
                            <p className="text-sm text-slate-500 font-medium">Detailed profile for {fullMember.firstName} {fullMember.lastName}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-50 rounded-xl transition-all group"
                    >
                        <X size={24} className="text-slate-400 group-hover:text-slate-600 group-hover:rotate-90 transition-all duration-300" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 space-y-10">

                    {/* Loading/Error Overlay for Full Data */}
                    {isLoading && (
                        <div className="flex flex-col items-center justify-center py-12 gap-3 text-blue-600 animate-pulse">
                            <Loader2 className="animate-spin" size={32} />
                            <p className="text-sm font-bold uppercase tracking-widest">Loading deep profile...</p>
                        </div>
                    )}

                    {!isLoading && isError && (
                        <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-center gap-4 text-red-600">
                            <AlertCircle size={24} />
                            <div>
                                <p className="text-sm font-bold">Failed to load additional details</p>
                                <p className="text-xs opacity-80">{error?.data?.message || "Something went wrong"}</p>
                            </div>
                        </div>
                    )}

                    {/* Basic Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <InfoItem icon={User} label="Full Name" value={`${fullMember.firstName} ${fullMember.lastName}`} />
                        <InfoItem icon={Mail} label="Email Address" value={fullMember.email} />
                        <InfoItem icon={Phone} label="Phone Number" value={fullMember.phone || 'N/A'} />
                        <InfoItem icon={Globe} label="Country" value={fullMember.country || 'N/A'} />
                        <InfoItem icon={MapPin} label="Chapter" value={fullMember.chapter?.chapter_name || fullMember.chapter || 'N/A'} />
                        <InfoItem icon={IdCard} label="Member ID" value={fullMember.importedMember_id || fullMember._id} />
                        <InfoItem icon={Calendar} label="Member Since" value={new Date(fullMember.createdAt).toLocaleDateString()} />
                        <InfoItem icon={Shield} label="Roles" value={fullMember.roles?.join(', ').toUpperCase() || 'USER'} isBadge />
                        {/* <InfoItem icon={User} label="Username" value={fullMember.userName ? `@${fullMember.userName}` : 'N/A'} /> */}
                    </div>

                    {!isLoading && !isError && response && (
                        <>
                            <div className="h-px bg-slate-100" />

                            {/* Stats Summary */}
                            <section className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <TrendingUp className="text-blue-600" size={20} />
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Activity & Financials</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Total Spent</p>
                                        <p className="text-2xl font-black text-slate-800">$ {stats.totalSpent?.toLocaleString() || '0'}</p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Outstanding Balance</p>
                                        <p className={`text-2xl font-black ${stats.outstandingBalance < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                            $ {stats.outstandingBalance?.toLocaleString() || '0'}
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Payments Count</p>
                                        <p className="text-2xl font-black text-slate-800">{stats.totalPaymentsCount || '0'}</p>
                                    </div>
                                </div>
                            </section>

                            <div className="h-px bg-slate-100" />

                            {/* Emergency Contact */}
                            <section className="space-y-6 text-slate-900">
                                <div className="flex items-center gap-3">
                                    <Heart className="text-red-500" size={20} />
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ">Emergency Contact</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <InfoItem label="Full Name" value={contactInfo.emergencyContact?.firstName ? `${contactInfo.emergencyContact.firstName} ${contactInfo.emergencyContact.lastName}` : '---'} />
                                    <InfoItem label="Relationship" value={contactInfo.emergencyContact?.relationship || '---'} />
                                    <InfoItem label="Phone Number" value={contactInfo.emergencyContact?.phone || '---'} />
                                    <InfoItem label="Email" value={contactInfo.emergencyContact?.email || '---'} />
                                    <div className="md:col-span-2">
                                        <InfoItem label="Address" value={`${contactInfo.emergencyContact?.address || ''} ${contactInfo.emergencyContact?.country || ''}`.trim() || '---'} />
                                    </div>
                                </div>
                            </section>

                            <div className="h-px bg-slate-100" />

                            {/* Next of Kin */}
                            <section className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Users className="text-emerald-500" size={20} />
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Next of Kin</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <InfoItem label="Full Name" value={contactInfo.nextOfKin?.firstName ? `${contactInfo.nextOfKin.firstName} ${contactInfo.nextOfKin.lastName}` : '---'} />
                                    <InfoItem label="Relationship" value={contactInfo.nextOfKin?.relationship || '---'} />
                                    <InfoItem label="Phone Number" value={contactInfo.nextOfKin?.phone || '---'} />
                                    <InfoItem label="Email" value={contactInfo.nextOfKin?.email || '---'} />
                                    <div className="md:col-span-2">
                                        <InfoItem label="Address" value={`${contactInfo.nextOfKin?.address || ''} ${contactInfo.nextOfKin?.country || ''}`.trim() || '---'} />
                                    </div>
                                </div>
                            </section>
                        </>
                    )}
                </div>

                {/* Footer */}
                <div className="px-8 py-6 bg-slate-50/50 border-t border-gray-100 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                    >
                        Close Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

const InfoItem = ({ icon: Icon, label, value, isBadge }) => (
    <div className="space-y-2">
        <div className="flex items-center gap-2 text-slate-400">
            {Icon && <Icon size={14} />}
            <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
        </div>
        {isBadge ? (
            <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-black border ${value?.toLowerCase().includes('admin')
                ? 'bg-red-50 text-red-600 border-red-100'
                : 'bg-blue-50 text-blue-600 border-blue-100'
                }`}>
                {value || '---'}
            </span>
        ) : (
            <p className="text-sm font-bold text-slate-800 leading-tight truncate" title={value}>{value || '---'}</p>
        )}
    </div>
);

export default MemberInfoModal;
