import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
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
    ArrowLeft
} from 'lucide-react';
import { useGetUserFullProfileQuery, useUpdateUserMutation } from '../../../platform/usersApiSlice';
import LoadingState from '../../../../component/ui/LoadingState';
import ErrorState from '../../../../component/ui/ErrorState';

const MemberProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: response, isLoading, isError, error, refetch } = useGetUserFullProfileQuery(id);
    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

    if (isLoading) return <LoadingState message="Loading member profile..." />;
    if (isError) return <ErrorState message={error?.data?.message || "Error loading profile"} onRetry={refetch} />;

    const fullMember = response?.data?.user;
    const contactInfo = response?.data?.contactInfo || {};
    const stats = response?.data?.stats || {};

    const handleToggleEmailVerification = async () => {
        try {
            await updateUser({
                id: fullMember._id,
                emailVerified: !fullMember.emailVerified
            }).unwrap();
        } catch (err) {
            alert(err?.data?.message || "Failed to update verification status");
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="animate-in fade-in duration-500 pb-10">
            {/* Header / Breadcrumbs */}
            <div className="bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 z-10 shadow-sm">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <div>
                        <h2 className="text-xl font-bold text-slate-800">
                            {fullMember.firstName} {fullMember.lastName}
                        </h2>
                        <p className="text-xs text-slate-500">Member Profile & Activity</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${fullMember.isVerifiedMember ? 'bg-green-50 text-green-600 border-green-100' : 'bg-orange-50 text-orange-600 border-orange-100'
                        }`}>
                        {fullMember.isVerifiedMember ? 'Verified Member' : 'Unverified'}
                    </span>
                </div>
            </div>

            <div className="py-6 space-y-6 max-w-7xl mx-auto">
                {/* Top Section: Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Identity Card */}
                    <div className="lg:col-span-1 bg-white border border-gray-100 p-8 shadow-sm text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500 opacity-50" />

                        <div className="relative z-10 space-y-4">
                            <div className="w-24 h-24 rounded-3xl bg-slate-50 border border-slate-100 mx-auto flex items-center justify-center text-slate-300 overflow-hidden shadow-inner">
                                {fullMember.image?.url ? (
                                    <img src={fullMember.image.url} alt={fullMember.firstName} className="w-full h-full object-cover" />
                                ) : (
                                    <User size={48} />
                                )}
                            </div>

                            <div>
                                <h3 className="text-xl font-black text-slate-900 leading-tight">
                                    {fullMember.firstName} {fullMember.lastName}
                                </h3>
                                <p className="text-sm font-bold text-blue-600 mt-1">
                                    {fullMember.roles?.join(' / ').toUpperCase()}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-50 space-y-3">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest">ID Number</span>
                                    <span className="text-slate-800 font-mono font-bold">20-{fullMember.member_id || fullMember.importedMember_id}</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest">Joined</span>
                                    <span className="text-slate-800 font-bold">{formatDate(fullMember.createdAt)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Financial Stats */}
                    <div className="lg:col-span-2 bg-white border border-gray-100 p-8 shadow-sm flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-8">
                            <TrendingUp className="text-blue-600" size={20} />
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Activity & Financials</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-slate-50 p-6 border border-slate-100 space-y-2 group hover:bg-white hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Total Spent</p>
                                <p className="text-2xl font-black text-slate-800">$ {stats.totalSpent?.toLocaleString() || '0'}.00</p>
                            </div>
                            <div className="bg-slate-50 p-6 border border-slate-100 space-y-2 group hover:bg-white hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Outstanding Balance</p>
                                <p className={`text-2xl font-black ${stats.outstandingBalance < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                    $ {stats.outstandingBalance?.toLocaleString() || '0'}.00
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 border border-slate-100 space-y-2 group hover:bg-white hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Payments Count</p>
                                <p className="text-2xl font-black text-slate-800">{stats.totalPaymentsCount || '0'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Info Blocks */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Contact Information */}
                    <div className="bg-white border border-gray-100 p-8 shadow-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <Mail className="text-blue-500" size={20} />
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Contact Information</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InfoField icon={Mail} label="Email" value={fullMember.email} />
                            <InfoField icon={Phone} label="Phone" value={fullMember.phone} />
                            <InfoField icon={Globe} label="Country" value={fullMember.country} />
                            <InfoField icon={MapPin} label="Chapter" value={fullMember.chapter?.chapter_name || fullMember.chapter} />

                            <div className="md:col-span-2 pt-4 border-t border-slate-50 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Shield size={16} className={fullMember.emailVerified ? 'text-green-500' : 'text-slate-300'} />
                                    <span className="text-xs font-bold text-slate-600">Email Status: {fullMember.emailVerified ? 'Verified' : 'Pending'}</span>
                                </div>
                                {/* <button
                                    disabled={isUpdating}
                                    onClick={handleToggleEmailVerification}
                                    className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-800 flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg transition-colors border border-blue-100"
                                >
                                    {isUpdating && <Loader2 size={12} className="animate-spin" />}
                                    {fullMember.emailVerified ? 'Revoke Verification' : 'Verify Email Now'}
                                </button> */}
                            </div>
                        </div>
                    </div>

                    {/* Detailed Personal Info */}
                    <div className="bg-white border border-gray-100 p-8 shadow-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <IdCard className="text-indigo-500" size={20} />
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Personal Details</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InfoField label="Gender" value={fullMember.gender} />
                            <InfoField label="Date of Birth" value={formatDate(fullMember.dob)} />
                            <InfoField label="City" value={fullMember.city} />
                            <InfoField label="State / Province" value={fullMember.state} />
                            <div className="md:col-span-2">
                                <InfoField label="Home Address" value={fullMember.address} />
                            </div>
                        </div>
                    </div>

                    {/* Emergency Contact */}
                    <div className="bg-white border border-gray-100 p-8 shadow-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <Heart className="text-red-500" size={20} />
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Emergency Contact</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InfoField label="Name" value={contactInfo.emergencyContact?.firstName ? `${contactInfo.emergencyContact.firstName} ${contactInfo.emergencyContact.lastName}` : '---'} />
                            <InfoField label="Relationship" value={contactInfo.emergencyContact?.relationship || '---'} />
                            <InfoField label="Phone" value={contactInfo.emergencyContact?.phone || '---'} />
                            <InfoField label="Email" value={contactInfo.emergencyContact?.email || '---'} />
                        </div>
                    </div>

                    {/* Next of Kin */}
                    <div className="bg-white border border-gray-100 p-8 shadow-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <Users className="text-emerald-500" size={20} />
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Next of Kin</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InfoField label="Name" value={contactInfo.nextOfKin?.firstName ? `${contactInfo.nextOfKin.firstName} ${contactInfo.nextOfKin.lastName}` : '---'} />
                            <InfoField label="Relationship" value={contactInfo.nextOfKin?.relationship || '---'} />
                            <InfoField label="Phone" value={contactInfo.nextOfKin?.phone || '---'} />
                            <InfoField label="Email" value={contactInfo.nextOfKin?.email || '---'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InfoField = ({ icon: Icon, label, value }) => (
    <div className="space-y-1">
        <div className="flex items-center gap-2 text-slate-400">
            {Icon && <Icon size={12} />}
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">{label}</span>
        </div>
        <p className="text-sm font-bold text-slate-800 truncate" title={value}>{value || '---'}</p>
    </div>
);

export default MemberProfile;
